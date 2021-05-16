import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

function AddMovie(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genreId, setGenreId] = useState(0);
    const genre = useSelector(store => store.genres);
    const newMovie = {
        title: title,
        poster: poster,
        description: description,
        genre_id: genreId
    }
    const addMovie = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_NEW_MOVIE', payload: newMovie})
    }
    const cancelAdd = () => {
        setTitle('');
        setPoster('');
        setDescription('');
        setGenreId(0);
        history.push('/');
    }
    
    useEffect(() => {
        dispatch({type: 'GET_GENRES'})
    }, [])

    return (
        <>
            <form onSubmit={addMovie}>
                <h4>Add a new move:</h4>
                <input onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Title of Movie"></input>
                <input onChange={(event) => setPoster(event.target.value)} value={poster} placeholder="Url for Movie Poster"></input>
                <textarea onChange={(event) => setDescription(event.target.value)} value={description} placeholder="Movie Description" />
                <select value={genre.id} name='genreId' onChange={(event) => setGenreId(event.target.value)}>
                    {genre.map(genre => {
                        return <option key={genre.id} value={genre.id}>{genre.name}</option>
                    })}
                </select>
                
                <button>Save</button> 
            </form>
            <button onClick={cancelAdd}>Cancel</button>
        </>
    )

}

export default AddMovie;