const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// gets the movie information from the database and sends it back to the client
router.get('/', (req, res) => {

  // querytext to get all information and send the result back to the client
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;

  //the results of the successful query are sent to the client
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })

    // catch for error if one occurs
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

//get the specific details from the server
router.get('/:id', (req, res) => {
  //the id, which determines which information to get from the database, is the request parameters
  //this is the id of the movie (in the database) that was clicked on in the client, which was sent by the index
  const detailsToGet = req.params.id;
  //query text to go into the database
  ////the query text selects the requested information from the database
  //it also joins the three tables together to access both the information for the movie 
  //and the genre(s) for the movie as well
  const queryText = `SELECT title, name, description, poster, genre_id, genres.name FROM movies_genres 
  JOIN movies ON movies.id = movies_genres.movie_id
  JOIN genres ON genres.id = movies_genres.genre_id
   WHERE movies.id=$1;`;
  pool.query(queryText, [detailsToGet])
  .then(result => {
    res.send(result.rows);
  })
  //catch for error in case one occurs
  .catch(error => {
    console.log('Error with getting details for movie', error);
    res.sendStatus(500);
  })
});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;