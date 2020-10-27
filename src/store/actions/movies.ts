import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchMovies = (searchQuery: string) => {
    return async (dispatch: any) => {
        try {
            const result: any = await axios.get(`http://localhost:4000/movies?search=${searchQuery}&searchBy=title&limit=200`);
            await dispatch(fetchMoviesSuccess(result));
        } catch (error) {
            dispatch(fetchMoviesFailed());
        }
    };
};

export const fetchMoviesSuccess = (result: any) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        movies: result.data.data
    };
};

export const fetchMoviesFailed = () => {
    return {
        type: actionTypes.FETCH_MOVIES_FAILED
    };
};

export const deleteMovie = (movie: string, movies: [], filteredMovies: [], movieOpened: false | {}) => {
    return async (dispatch: any) => {
        try {
            await axios.delete(`http://localhost:4000/movies/${movie}`);
            await dispatch(deleteMovieSuccess(movie, movies, filteredMovies, movieOpened))
        } catch (error) {
            dispatch(deleteMovieFailed());
        }
    };
};

export const deleteMovieSuccess = (movie: string, movies: [], filteredMovies: [], movieOpened: false | {}) => {
    return {
        type: actionTypes.DELETE_MOVIE_SUCCESS,
        movie,
        movies,
        filteredMovies,
        movieOpened
    };
};

export const deleteMovieFailed = () => {
    return {
        type: actionTypes.DELETE_MOVIE_FAILED,
    };
};

export const addMovie = (movie: {}) => {
    return async (dispatch: any) => {
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

export const editMovie = (movie: {}, movies: [], filteredMovies: [], movieOpened: false | {}) => {
    return async (dispatch: any) => {
        try {
            await axios.put(`http://localhost:4000/movies`, { ...movie });
            await dispatch(editMovieSuccess(movie, movies, filteredMovies, movieOpened))
        } catch (error) {
            dispatch(editMovieFailed());
        }
    };
};

export const editMovieSuccess = (movie: {}, movies: [], filteredMovies: [], movieOpened: false | {}) => {
    return {
        type: actionTypes.EDIT_MOVIE_SUCCESS,
        movie,
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

export const setFilteredMovies = (filteredMovies: {}) => {
    return {
        type: actionTypes.SET_FILTERED_MOVIES,
        filteredMovies
    };
};

export const setSortedMovies = (sortedMovies: {}) => {
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

export const setMovieOpened = (movie: false | {}) => {
    return {
        type: actionTypes.SET_MOVIE_OPENED,
        movie
    }
}
