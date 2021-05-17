import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie'
import Details from '../Details/Details'

//function to render the app and handle its various routes and links
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        {/* nav bar for easy navigation between pages */}
        <nav>
            <div>
              <Link to="/">Homepage</Link>
            </div>
            <div>
              <Link to="/addmovie">Add a Movie</Link>
            </div>
        </nav> 
        {/* various routes for the different components, uses exact to make sure there
        are not any unforeseen issues with each page */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/addmovie" exact>
          <AddMovie />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
      </Router>
    </div>
  );
}


export default App;
