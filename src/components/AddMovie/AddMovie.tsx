import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './AddMovie.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
    onAddMovie: Function;
}

const AddMovie: React.FC<Props> = ({ onClick, onAddMovie }) => {
    const [title, setTitle] = useState<string>('');
    const [releaseDate, setReleaseDate] = useState<string>('');
    const [posterPath, setPosterPath] = useState<string>('');
    const [genres, setGenres] = useState<any>();
    const [overview, setOverview] = useState<string>('');
    const [runtime, setRuntime] = useState<number | string>('');

    const handleReset = () => {
        setTitle('');
        setReleaseDate('');
        setPosterPath('');
        setGenres([]);
        setOverview('');
        setRuntime(''); 
    }

    const handleAddMovie = (e: ButtonType): void => {
        e.preventDefault();
        const newMovie: AddMovie = {
            title,
            release_date: releaseDate,
            poster_path: posterPath,
            overview,
            runtime,
            genres: [], 
            vote_average: 0
        }
        genres.forEach((el: Genre) => newMovie.genres.push(el.value));
        onAddMovie(newMovie);
    }

    return (
        <div className={styles.addMovie}>
            <Button onClick={onClick} type="button" title="&#10005;" styleType="modalClose"/>
            <h3>add movie</h3>
            <form>
                <Input elementType='input' label='title' placeholder='Title here' value={title} onChange={(e: InputType) => setTitle(e.target.value)} />
                <Input elementType='date' label='release date' placeholder='Select Date' value={releaseDate} onChange={(e: InputType) => setReleaseDate(e.target.value)} />
                <Input elementType='url' label='movie url' placeholder='Movie URL here' value={posterPath} onChange={(e: InputType) => setPosterPath(e.target.value)} />
                <Input elementType='select' label='genre' value={genres} onChange={setGenres} />
                <Input elementType='text' label='overview' placeholder='Overview here' value={overview} onChange={(e: InputType) => setOverview(e.target.value)} />
                <Input elementType='text' label='runtime' placeholder='Runtime here' value={runtime} onChange={(e: InputType) => setRuntime(parseInt(e.target.value))} />
                <div className={styles.buttons}>
                    <Button onClick={handleReset} type="button" title="reset" styleType="reset"/>
                    <Button onClick={handleAddMovie} type="submit" title="submit" styleType="submit"/>
                </div>
            </form>
        </div>
    )
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddMovie: (movie: Movie) =>  dispatch(actions.addMovie(movie)),
    };
};

export default connect(null, mapDispatchToProps)(AddMovie);
