const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//request to get the genre information from the database
router.get('/', (req, res) => {
  //querytext to go into the database and grab all the possible genre information from the genre table
  let queryText = `SELECT * FROM "genres";`;
  pool.query(queryText).then(result => {
    //sends the information back to the client
    res.send(result.rows);
  })
  //catch for an error if one occurs
  .catch(error => {
    console.log('Error with getting genres from server', error);
    res.sendStatus(500);
  })
});

module.exports = router;