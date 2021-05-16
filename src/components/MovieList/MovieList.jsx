import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Details from '../Details/Details';
import {useHistory} from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

  
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <MovieItem movie={movie}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;