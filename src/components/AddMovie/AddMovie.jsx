import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

//function to add a movie to the database
function AddMovie(){

    //const for both history and for dispatch
    const history = useHistory();
    const dispatch = useDispatch();

    //const to handle the input information from the user
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genreId, setGenreId] = useState(0);

    //gets the genre information from the store
    //critical for the dropdown menu to work
    const genre = useSelector(store => store.genres);
    
    //creates a new object to hold the value of the states for the inputs. This is sent to the server
    const newMovie = {
        title: title,
        poster: poster,
        description: description,
        genre_id: genreId
    }

    //function to dispatch that object to the index file to be handled by the sagas and eventually sent to the server
    const addMovie = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_NEW_MOVIE', payload: newMovie})
        history.push('/');
    }

    //function to cancel the addition of a new movie. Takes the user back to the homepage and clears the inputs
    const cancelAdd = () => {
        setTitle('');
        setPoster('');
        setDescription('');
        setGenreId(0);
        history.push('/');
    }
    
    //makes sure that the genre information is loaded right as the page loads
    useEffect(() => {
        dispatch({type: 'GET_GENRES'})
    }, [])

    //renders the page to the dom
    return (
        <>
            {/* form for the various inputs, when the button is clicked, it runs the addMovie function above with those inputs*/}
            <form onSubmit={addMovie}>
                <h4>Add a new move:</h4>

                {/* for each input, when the change occurs with the button press, it sets the value of each const to the value of the input */}
                <input onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Title of Movie"></input>
                <input onChange={(event) => setPoster(event.target.value)} value={poster} placeholder="Url for Movie Poster"></input>
                <textarea onChange={(event) => setDescription(event.target.value)} value={description} placeholder="Movie Description" />

                {/* this dropdown menu allows the user to select a genre for the new movie. This information is sent when the button is pressed */}
                <select value={genre.id} name='genreId' onChange={(event) => setGenreId(event.target.value)}>
                    {genre.map(genre => {
                        return <option key={genre.id} value={genre.id}>{genre.name}</option>
                    })}
                </select>
                
                {/* button to save the new movie, sending it to the index and eventually to the database */}
                <button>Save</button> 
            </form>
            <button onClick={cancelAdd}>Cancel</button>
        </>
    )

}

// for exporting this component
export default AddMovie;