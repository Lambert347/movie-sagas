import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {generatePath, useHistory} from 'react-router-dom';

function Details(){
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    console.log(details);

    // const getDetails = () => {
    //     dispatch({type: 'GET_DETAILS'})
    // }

    // useEffect(() => {
    //     getDetails();
    // }, []);
    
    return (
        <section>
                <h2>{details[0].title}</h2>
                <img src={details[0].poster} />
                <div>
                    <h3>Genres:</h3>
                    {details.map(movie => {
                        return (
                            <div key={movie.id}>
                                {movie.name}
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h3>Description:</h3>
                    <p>{details[0].description}</p>
                </div>
                
        </section>
    )
}

export default Details;