import React, { useState, useEffect, useCallback } from 'react';
import Search from '../../components/Search/Search';
import ResultsFilter from '../../components/ResultsFilter/ResultsFilter';
import ResultsSort from '../../components/ResultsSort/ResultsSort';
import ResultsCount from '../../components/ResultsCount/ResultsCount';
import Movies from '../../components/Movies/Movies';
import Modal from '../../components/UI/Modal/Modal';
import AddMovie from '../../components/AddMovie/AddMovie';
import EditMovie from '../../components/EditMovie/EditMovie';
import DeleteMovie from '../../components/DeleteMovie/DeleteMovie';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import NoMovie from '../../components/NoMovie/NoMovie';

import mockedData from '../../mocked-data.json';

import styles from './Index.module.scss';

const Index: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [sortType, setSortType] = useState<string>('release-date-desc');
    const [modal, setModal] = useState<false | string>(false);
    const [filteredMovies, setFilteredMovies] = useState<any>(mockedData);
    const [moviesCounter, setMoviesCounter] = useState<number>(0);
    const [selectedMovie, setSelectedMovie] = useState<any>();
    const [movieOpened, setMovieOpened] = useState<boolean | string>(false);
    const [isDotsClicked, setIsDotsClicked] = useState<boolean>(false);

    const movies = mockedData;

    useEffect(() => {
        setMoviesCounter(filteredMovies.length);
    },[filteredMovies]);

    useEffect(() => {
        setFilteredMovies(sortMovies(filteredMovies));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[sortType]);

    const sortMovies = (movies: any) => {
        let sortedMovies = movies.slice().sort((movieOne: any, movieTwo: any) => (new Date(movieOne.release_date) as any) - (new Date(movieTwo.release_date) as any))
        if (sortType === 'release-date-desc') {
            sortedMovies = sortedMovies.reverse();
        }
        return sortedMovies;
    }
        
    const handleFilterOnClick = (e: any): void => {
        setActiveFilter(e.target.innerHTML);

        if(e.target.innerHTML === 'All') {
            setFilteredMovies(sortMovies(movies));
        } else {
            const newMoviesList = movies.filter((el: any) => {
                const genresArray = Object.keys(el.genres).map((key) => el.genres[key]);
                return (genresArray.includes(e.target.innerHTML)) ? el : null;
            })
            setFilteredMovies(sortMovies(newMoviesList));
        }
    };

    const handleSortOnClick = useCallback((e: any): void => {
        if (e.target.getAttribute('class').includes('arrowDown')) {
            setSortType('release-date-asc');
        } else {
            setSortType('release-date-desc');
        }
    }, []);

    const handleModalClose = (e: any): void => {
        setModal(false);
        setIsDotsClicked(false);
    }

    const handleModalOpen = useCallback((e: any): void => {
        const selectedMovie = filteredMovies.find( (el: any) => el.id === parseInt(e.target.getAttribute('data-id')));
        setSelectedMovie(selectedMovie);
        setModal(e.target.innerHTML);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDotsClick = (e: any): void => {
        setIsDotsClicked(e.target.getAttribute('data-id'));
    }

    const handleMovieOpen = (e: any): void => {
        const selectedMovie = filteredMovies.find( (el: any) => el.id === parseInt(e.target.getAttribute('data-id')));
        setMovieOpened(selectedMovie);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    let modalChildren = null;
    if(modal) {
        if(modal === '+ add movie') {
            modalChildren = <AddMovie onClick={handleModalClose} />;
        } else if(modal === 'edit') {
            modalChildren = <EditMovie selectedMovie={selectedMovie} onClick={handleModalClose} />;
        } else if(modal === 'delete') {
            modalChildren = <DeleteMovie onClick={handleModalClose} />;
        }
    }

    let availableMovies;
    if(filteredMovies.length === 0) {
        availableMovies = <NoMovie />;
    } else {
        availableMovies = <><ResultsCount number={moviesCounter} />
        <Movies movies={filteredMovies} buttonOnClick={handleModalOpen} closeOnClick={() => setIsDotsClicked(!isDotsClicked)} dotsOnClick={handleDotsClick} movieOnClick={handleMovieOpen} isDotsClicked={isDotsClicked} /></>
    }

    return (
        <>
            {movieOpened ? <MovieDetails data={movieOpened} onClick={() => setMovieOpened(false)} /> : <Search onClick={handleModalOpen} />}
            <div className={styles.indexWrapper}>
                <div className={styles.resultModifiers}>
                    <ResultsFilter
                        onClick={handleFilterOnClick}
                        activeFilter={activeFilter}
                    />
                    <ResultsSort
                        styleType={sortType}
                        onClick={handleSortOnClick}
                    />
                </div>
                {availableMovies}
            </div>
            {modal ? <Modal onClick={handleModalClose}>{modalChildren}</Modal> : null}
        </>
    );
};

export default Index;
