import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    movies: [],
    filteredMovies: [],
    modal: false,
    movieOpened: false
};

const fetchMovies = (state: any, action: any) => {
    return updateObject(state, { movies: action.movies, filteredMovies: action.movies, error: false });
};

const fetchMoviesFailed = (state: any, action: any) => {
    return updateObject(state, { modal: 'errorCRUD' });
};

const deleteMovie = (state: any, action: any) => {
    const newMovies = action.movies.filter( (el: any) => el.id !== action.movie ? el : null);
    const newFilteredMovies = action.filteredMovies.filter((el: any) => el.id !== action.movie ? el : null);
    
    let movieOpenedValue = action.movieOpened;
    if (action.movie === action.movieOpened.id) {
        movieOpenedValue = false;
    };

    return updateObject(state, {movies: newMovies, filteredMovies: newFilteredMovies, modal: 'deleteMovieSuccess', movieOpened: movieOpenedValue });
};

const deleteMovieFailed = (state: any, action: any) => {
    return updateObject(state, { modal: 'errorCRUD' });
};

const addMovie = (state: any, action: any) => {
    return updateObject(state, { modal: 'addMovieSuccess' });
};

const addMovieFailed = (state: any, action: any) => {
    return updateObject(state, { modal: 'errorCRUD' });
};

const editMovie = (state: any, action: any) => {
    const newMovies = action.movies.map((el: any, index: any) => {
        if (el.id !== action.movie.id) {
            return el;
        } else {
            return { ...action.movies[index], ...action.movie};
        }
    });

    const newFilteredMovies = action.filteredMovies.map((el: any, index: any) => {
        if (el.id !== action.movie.id) {
            return el;
        } else {
            return { ...action.filteredMovies[index], ...action.movie};
        }
    });

    let movieOpenedValue = action.movieOpened;
    if (action.movie.id === action.movieOpened.id) {
        movieOpenedValue = {...action.movieOpened, ...action.movie};
    };

    return updateObject(state, {movies: newMovies, filteredMovies: newFilteredMovies, modal: 'editMovieSuccess', movieOpened: movieOpenedValue
});
}

const editMovieFailed = (state: any, action: any) => {
    return updateObject(state, { modal: 'errorCRUD' });
};

const setFilteredMovies = (state: any, action: any) => {
    return updateObject(state, { filteredMovies: action.filteredMovies });
};

const setSortedMovies = (state: any, action: any) => {
    return updateObject(state, { filteredMovies: action.sortedMovies });
};

const setModal = (state: any, action: any) => {
    return updateObject(state, { modal: action.modalType });
};

const setMovieOpened = (state: any, action: any) => {
    return updateObject(state, {movieOpened: action.movie});
}

const reducer = (state: {} = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_SUCCESS: return fetchMovies(state, action);
        case actionTypes.FETCH_MOVIES_FAILED: return fetchMoviesFailed(state, action);
        case actionTypes.DELETE_MOVIE_SUCCESS: return deleteMovie(state, action);
        case actionTypes.DELETE_MOVIE_FAILED: return deleteMovieFailed(state, action);
        case actionTypes.ADD_MOVIE_SUCCESS: return addMovie(state, action);
        case actionTypes.ADD_MOVIE_FAILED: return addMovieFailed(state, action);
        case actionTypes.EDIT_MOVIE_SUCCESS: return editMovie(state, action);
        case actionTypes.EDIT_MOVIE_FAILED: return editMovieFailed(state, action);
        case actionTypes.SET_FILTERED_MOVIES: return setFilteredMovies(state, action);
        case actionTypes.SET_SORTED_MOVIES: return setSortedMovies(state, action);
        case actionTypes.SET_MODAL: return setModal(state, action);
        case actionTypes.SET_MOVIE_OPENED: return setMovieOpened(state, action);
        default: return state;
    };
};

export default reducer;
