import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import './MovieItem.css'

//function to handle the rendering of each individual movie object
function MovieItem(props) {

    //sets a new variable to the prop taken in from the movie list
    const movie = props.movie;

    //const for both history and dispatch
    const history = useHistory();
    const dispatch = useDispatch();

    //function to handle the click from the image. When the image is clicked, a dispatch
    //with the payload of that movie's id is sent to the index to be handled by the sagas
    //the user is then moved to the details page with the corresponding information
    const handleClick = () => {
        dispatch({type: 'GET_DETAILS', payload: movie.id})
        history.push('/details');
    }

    //renders the page to the dom
    return (
        <section className="MovieItem">
            <div>
                {/* renders the title and the image for the poster. */}
                <h3>{movie.title}</h3>

                {/* when the image is clicked, run the handleClick function above  */}
                <img onClick={handleClick} src={movie.poster} alt={movie.title} />
            </div>
        </section>
    )
}
//exports the component
export default MovieItem;