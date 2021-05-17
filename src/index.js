import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('ADD_NEW_MOVIE', addNewMovie);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('GET_DETAILS', fetchDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
}
//fetch the details for the requested movie
function* fetchDetails(action) {
    try {
        //axios get request to the server to grab the details for the movie.
        //the movie in question is determined by the action.payload from the client
        //this action.payload is the id of the selected movie, which is used to get the details for that movie in the database
        const response = yield axios.get(`/api/movie/${action.payload}`)
        yield put({type: 'SET_DETAILS', payload: response.data});
    //catch for an error if one occurs
    } catch (error) {
        console.log('Error with getting details from the server', error)
    }
}
//adds a new movie from the client
function* addNewMovie(action) {
    try {
        //axios post request to send a new package of movie information from the client to the server
        //the action.payload is that information from the client
        console.log('Adding a new movie:', action.payload);
        yield axios.post('/api/movie', action.payload);
    } catch(error) {
        alert('Unable to add new movie');
        console.log('Error with adding movie', error);
    }

}
//function to get the genre information from the server
function* getGenres() {
    try {
        //axios.get request to take the information from the server and stuff 
        // it into the store reducer to be used by the client
        const response = yield axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: response.data});
    } catch (error) {
        console.log('Error with getting genres from the server', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//Used to store the details for the selected movie
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
