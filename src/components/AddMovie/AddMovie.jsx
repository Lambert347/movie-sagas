import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AddMovie(){
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const addMovie = () => {
        dispatch({type: 'ADD_NEW_MOVIE', payload: newMovie})
    }
    const genre = useSelector(store => store.genres);
    useEffect(() => {
        dispatch({type: 'SET_GENRE'})
    }, [])

    return (
        <form onSubmit={addMovie}>
            <h4>Add a new move:</h4>
            <input onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Title of Movie"></input>
            <input onChange={(event) => setPoster(event.target.value)} value={poster} placeholder="Url for Movie Poster"></input>
            <textarea onChange={(event) => setDescription(event.target.value)} value={description} placeholder="Movie Description" />
            {genre.map(cat => {
                return <option key={genre.id} value={genre.id}>{genre.name}</option>
            })}
            <button>Add Movie</button>
            

        </form>
    )

}

export default AddMovie;