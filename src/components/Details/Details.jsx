import {useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';

function Details(){
    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    console.log(details[0]);

    const getDetails = () => {
        dispatch({type: 'GET_DETAILS'})
    }
    useEffect(() => {
        getDetails();;
    }, []);

    const returnHome = () => {
        history.push('/');
    }
    
    return (
        <section>
                <br></br>
                <button onClick={returnHome}>Back to list</button>
                {/* <h2>{details[0].title}</h2>
                <img src={details[0].poster} /> */}
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