import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './EditMovie.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
    selectedMovie: EditMovie;
    onEditMovie: Function;
    movies: Movie[];
    filteredMovies: Movie[];
    movieOpened: Movie | null;
}

const EditMovie: React.FC<Props> = ({ selectedMovie, onClick, onEditMovie, movies, filteredMovies, movieOpened }) => {
    const [title, setTitle] = useState<string>(selectedMovie.title);
    const [releaseDate, setReleaseDate] = useState<string>(selectedMovie.release_date);
    const [posterPath, setPosterPath] = useState<string>(selectedMovie.poster_path);
    const [genres, setGenres] = useState<any>();
    const [overview, setOverview] = useState<string>(selectedMovie.overview);
    const [runtime, setRuntime] = useState<number>(selectedMovie.runtime);

    useEffect(() => {
        setGenresValues();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const setGenresValues = () => {
        let selectedGenres: Genre[] = [];
        selectedMovie.genres.forEach(el => {
            return selectedGenres.push({label: el, value: el})
        });
        setGenres(selectedGenres);
    }

    const handleReset = () => {
        setTitle(selectedMovie.title);
        setReleaseDate(selectedMovie.release_date);
        setPosterPath(selectedMovie.poster_path);
        setGenresValues();
        setOverview(selectedMovie.overview);
        setRuntime(selectedMovie.runtime); 
    }

    const handleEditMovie = (e: ButtonType): void => {
        e.preventDefault();
        const editedMovie: EditMovie = {
            id: selectedMovie.id,
            title,
            release_date: releaseDate,
            poster_path: posterPath,
            overview,
            runtime: runtime ? runtime : 0,
            genres: [],
        }
        genres.forEach((el: Genre) => editedMovie.genres.push(el.value));
        onEditMovie(editedMovie, movies, filteredMovies, movieOpened);
    }

    return (
        <div className={styles.editMovie}>
            <Button onClick={onClick} type="button" title="&#10005;" styleType="modalClose"/>
            <h3>add movie</h3>
            <p className={styles.movieId}>movie id</p>
            <p className={styles.movieIdValue}>{selectedMovie.id}</p>
            <form>
                <Input elementType='input' label='title' placeholder='Title here' value={title} onChange={(e: InputType) => setTitle(e.target.value)} />
                <Input elementType='date' label='release date' placeholder='Select Date' value={releaseDate} onChange={(e: InputType) => setReleaseDate(e.target.value)} />
                <Input elementType='url' label='movie url' placeholder='Movie URL here' value={posterPath} onChange={(e: InputType) => setPosterPath(e.target.value)} />
                <Input elementType='select' label='genre' value={genres} onChange={setGenres} />
                <Input elementType='text' label='overview' placeholder='Overview here' value={overview} onChange={(e: InputType) => setOverview(e.target.value)} />
                <Input elementType='text' label='runtime' placeholder='Runtime here' value={runtime} onChange={(e: InputType) => setRuntime(parseInt(e.target.value))} />
                <div className={styles.buttons}>
                    <Button onClick={handleReset} type="button" title="reset" styleType="reset"/>
                    <Button onClick={handleEditMovie} type="submit" title="submit" styleType="submit"/>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = (state: AllState) => {
    return {
        movies: state.movies.movies,
        filteredMovies: state.movies.filteredMovies,
        movieOpened: state.movies.movieOpened
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onEditMovie: (editedMovie: Movie, movies: Movie[], filteredMovies: Movie[], movieOpened: Movie | null) => dispatch(actions.editMovie(editedMovie, movies, filteredMovies, movieOpened))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
