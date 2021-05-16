import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie'

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
        
        {/* Details page */}

      </Router>
    </div>
  );
}


export default App;
