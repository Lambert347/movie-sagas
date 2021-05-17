import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


//function to render the details to the dom
function Details(){
    //set both history and details as constants 
    //the details is taken from the store, which has the information 
    //requested from the server for the specific move that was clicked in the MovieItem
    const history = useHistory();
    const details = useSelector(store => store.details);


    const returnHome = () => {
        history.push('/');
    }
    
    return (
        <main>
            {details[0] === undefined ? 
                '' : (
                    <section>
                        <button onClick={returnHome}>Back to list</button>
                        <h2>{details[0].title}</h2>
                        <img src={details[0].poster} />
                        <div>
                            <h3>Genres:</h3>
                            {details.map(detail => {
                                return (
                                    <div key={detail.name}>
                                        {detail.name}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h3>Description:</h3>
                            <p>{details[0].description}</p>
                        </div>
                    </section>
                )}
        </main>
        );
}

export default Details;