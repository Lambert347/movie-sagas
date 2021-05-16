import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function MovieItem(props) {
    const movie = props.movie;
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type: 'GET_DETAILS', payload: movie.id})
        console.log(movie.id)
        history.push('/details');
    }

    return (
        <section>
            <div>
                <h3>{movie.title}</h3>
                <img onClick={handleClick} src={movie.poster} alt={movie.title} />
            </div>
        </section>
    )
}
export default MovieItem;