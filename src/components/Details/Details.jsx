import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


//function to render the details to the dom
function Details(){
    //set both history and details as constants 
    //the details is taken from the store, which has the information 
    //requested from the server for the specific move that was clicked in the MovieItem
    const history = useHistory();
    const details = useSelector(store => store.details);

    //function to return the user to the homepage when the button is clicked below
    const returnHome = () => {
        history.push('/');
    }
    //handles the rendering of the page
    return (
        <main>
            {/* ternary operator to make sure that the page is loaded correctly
                if the details information has yet to be received from the index, and is undefined, 
                load nothing. If it is defined, load the page*/}
            {details[0] === undefined ? 
                '' : (
                    <section>
                        {/* button to handle the return home function above */}
                        <button onClick={returnHome}>Back to list</button>
                        {/* renders the title only for the first object in the array of details. 
                            this matters more for movies with more than one genre, so that 
                            multiple titles are not loaded with each genre*/}
                        <h2>{details[0].title}</h2>
                        {/* similar situation to above but with the poster image itself */}
                        <img src={details[0].poster} />
                        <div>
                            {/* since the information comes back from the server as an array of objects,
                                this maps through that array and renders each genre to the dom. This makes
                                sure that all genres are rendered to the dom. */}
                            <h3>Genres:</h3>
                            {details.map(detail => {
                                return (
                                    <div key={detail.name}>
                                        {detail.name}
                                    </div>
                                )
                            })}
                        </div>
                        {/* similar situation here like with the title but only renders one movie description */}
                        <div>
                            <h3>Description:</h3>
                            <p>{details[0].description}</p>
                        </div>
                    </section>
                )}
        </main>
        );
}
//export the details component
export default Details;