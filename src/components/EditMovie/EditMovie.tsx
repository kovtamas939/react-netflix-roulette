import React, { useState, useEffect } from 'react'
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './EditMovie.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
    selectedMovie: {id: string, title: string, release_date: string, poster_path: string, genres: string[], overview: string, runtime: string};
}

const EditMovie: React.FC<Props> = ({ selectedMovie, onClick }) => {
    const [title, setTitle] = useState<string>(selectedMovie.title);
    const [releaseDate, setReleaseDate] = useState<string>(selectedMovie.release_date);
    const [posterPath, setPosterPath] = useState<string>(selectedMovie.poster_path);
    const [genres, setGenres] = useState<any>();
    const [overview, setOverview] = useState<string>(selectedMovie.overview);
    const [runtime, setRuntime] = useState<string>(selectedMovie.runtime);

    useEffect(() => {
        setGenresValues();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const setGenresValues = () => {
        let selectedGenres: any = [];
        selectedMovie.genres.forEach(el => {
            return selectedGenres.push({label: el, value: el})
        });
        setGenres(selectedGenres);
    }

    const handleValueChange = (e: any): void => {
        switch (e.target.getAttribute('data-type')) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'release date':
                setReleaseDate(e.target.value);
                break;
            case 'movie url':
                setPosterPath(e.target.value);
                break;
            case 'genre':
                console.log(e.target.value);
                break;
            case 'overview':
                setOverview(e.target.value);
                break;
            case 'runtime':
                setRuntime(e.target.value); 
                break;
            default:
                break;
        }
    }

    const handleReset = () => {
        setTitle(selectedMovie.title);
        setReleaseDate(selectedMovie.release_date);
        setPosterPath(selectedMovie.poster_path);
        setGenresValues();
        setOverview(selectedMovie.overview);
        setRuntime(selectedMovie.runtime); 
    }

    return (
        <div className={styles.editMovie}>
            <Button onClick={onClick} type="button" title="&#10005;" styleType="modalClose"/>
            <h3>add movie</h3>
            <p className={styles.movieId}>movie id</p>
            <p className={styles.movieIdValue}>{selectedMovie.id}</p>
            <form>
                <Input elementType='input' label='title' placeholder='Title here' value={title} onChange={handleValueChange} />
                <Input elementType='date' label='release date' placeholder='Select Date' value={releaseDate} onChange={handleValueChange} />
                <Input elementType='url' label='movie url' placeholder='Movie URL here' value={posterPath} onChange={handleValueChange} />
                <Input elementType='select' label='genre' value={genres} onChange={setGenres} />
                <Input elementType='text' label='overview' placeholder='Overview here' value={overview} onChange={handleValueChange} />
                <Input elementType='text' label='runtime' placeholder='Runtime here' value={runtime} onChange={handleValueChange} />
                <div className={styles.buttons}>
                    <Button onClick={handleReset} type="button" title="reset" styleType="reset"/>
                    <Button type="submit" title="submit" styleType="submit"/>
                </div>

            </form>
        </div>
    )
}

export default EditMovie;
