import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie'
import Details from '../Details/Details'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <nav>
            <div>
              <Link to="/">Homepage</Link>
            </div>
            <div>
              <Link to="/addmovie">Add a Movie</Link>
            </div>
        </nav>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/addmovie" exact>
          <AddMovie />
        </Route>
        <Route path="/details/:id" exact>
          <Detail />
        </Route>

      </Router>
    </div>
  );
}


export default App;
