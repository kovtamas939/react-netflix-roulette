import * as actionTypes from './actionTypes';
import axios from 'axios';
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk';

export const fetchMovies = (searchQuery: string): ThunkAction<void, MoviesState, unknown, Action<string>> => {
    return async dispatch => {
        try {
            const result: {data: {data: Movie[]}} = await axios.get(`http://localhost:4000/movies?search=${searchQuery}&searchBy=title&limit=200`);
            await dispatch(fetchMoviesSuccess(result.data.data));
        } catch (error) {
            dispatch(fetchMoviesFailed());
        }
    };
};

export const fetchMoviesSuccess = (result: Movie[]) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        movies: result
    };
};

export const fetchMoviesFailed = () => {
    return {
        type: actionTypes.FETCH_MOVIES_FAILED
    };
};

export const deleteMovie = (movie: string, movies: Movie[], filteredMovies: Movie[], isMovieOpened: boolean, movieOpened: Movie | null): ThunkAction<void, MoviesState, unknown, Action<string>> => {
    return async dispatch => {
        try {
            await axios.delete(`http://localhost:4000/movies/${movie}`);
            await dispatch(deleteMovieSuccess(movie, movies, filteredMovies, isMovieOpened, movieOpened))
        } catch (error) {
            dispatch(deleteMovieFailed());
        }
    };
};

export const deleteMovieSuccess = (movie: string, movies: Movie[], filteredMovies: Movie[], isMovieOpened: boolean, movieOpened: Movie | null) => {
    return {
        type: actionTypes.DELETE_MOVIE_SUCCESS,
        movie,
        movies,
        filteredMovies,
        isMovieOpened,
        movieOpened
    };
};

export const deleteMovieFailed = () => {
    return {
        type: actionTypes.DELETE_MOVIE_FAILED,
    };
};

export const addMovie = (movie: Movie): ThunkAction<void, MoviesState, unknown, Action<string>> => {
    return async dispatch => {
        try {
            await axios.post(`http://localhost:4000/movies`, { ...movie });
            await dispatch(addMovieSuccess());
        } catch (error) {
            dispatch(addMovieFailed());
        }
    };
};

export const addMovieSuccess = () => {
    return {
        type: actionTypes.ADD_MOVIE_SUCCESS,
    };
};

export const addMovieFailed = () => {
    return {
        type: actionTypes.ADD_MOVIE_FAILED,
    };
};

export const editMovie = (editedMovie: Movie, movies: Movie[], filteredMovies: Movie[], movieOpened: Movie | null): ThunkAction<void, MoviesState, unknown, Action<string>> => {
    return async dispatch => {
        try {
            await axios.put(`http://localhost:4000/movies`, { ...editedMovie });
            await dispatch(editMovieSuccess(editedMovie, movies, filteredMovies, movieOpened))
        } catch (error) {
            dispatch(editMovieFailed());
        }
    };
};

export const editMovieSuccess = (editedMovie: Movie, movies: Movie[], filteredMovies: Movie[], movieOpened: Movie | null) => {
    return {
        type: actionTypes.EDIT_MOVIE_SUCCESS,
        editedMovie,
        movies,
        filteredMovies,
        movieOpened
    }
};

export const editMovieFailed = () => {
    return {
        type: actionTypes.EDIT_MOVIE_FAILED,
    };
};

export const setFilteredMovies = (filteredMovies: Movie[]) => {
    return {
        type: actionTypes.SET_FILTERED_MOVIES,
        filteredMovies
    };
};

export const setSortedMovies = (sortedMovies: Movie[]) => {
    return {
        type: actionTypes.SET_SORTED_MOVIES,
        sortedMovies
    };
};

export const setModal = (modalType: boolean | string) => {
    return {
        type: actionTypes.SET_MODAL,
        modalType
    };
};

export const setMovieOpened = (isMovieOpened: boolean, movieOpened: Movie | null) => {
    return {
        type: actionTypes.SET_MOVIE_OPENED,
        isMovieOpened,
        movieOpened
    }
}
