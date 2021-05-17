import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

//function to handle the rendering of the movie list to the dom
function MovieList() {
    //const for both dispatch and to get the movies from the store
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //makes sure to get the movies from the store right when the page loads
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //renders the page to the dom
    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* maps through movies array received from the server */}
                {movies.map(movie => {
                    //renders the individual movie item to the dom and passes the movie as a prop to that component
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
//for exporting the component
export default MovieList;