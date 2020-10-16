import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import ResultsFilter from '../../components/ResultsFilter/ResultsFilter';
import ResultsSort from '../../components/ResultsSort/ResultsSort';
import ResultsCount from '../../components/ResultsCount/ResultsCount';
import Movies from '../../components/Movies/Movies';
import Modal from '../../components/UI/Modal/Modal';
import AddMovie from '../../components/AddMovie/AddMovie';
import EditMovie from '../../components/EditMovie/EditMovie';
import DeleteMovie from '../../components/DeleteMovie/DeleteMovie';

import mockedData from '../../mocked-data.json';

import styles from './Index.module.scss';

const Index: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [sortType, setSortType] = useState<string>('release-date-desc');
    const [modal, setModal] = useState<false | string>(false);
    const [movies, setMovies] = useState<any>(mockedData);
    const [moviesCounter, setMoviesCounter] = useState<number>(0);
    const [selectedMovie, setSelectedMovie] = useState<any>();
    const [isDotsClicked, setIsDotsClicked] = useState<boolean>(false);

useEffect(() => {
    setMoviesCounter(movies.length);
},[movies])

useEffect(() => {
    let sortedMovies = movies.slice().sort((movieOne: any, movieTwo: any) => (new Date(movieOne.release_date) as any) - (new Date(movieTwo.release_date) as any))
    if (sortType === 'release-date-desc') {
        sortedMovies = sortedMovies.reverse();
    }
    setMovies(sortedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[sortType]);

    const handleFilterOnClick = (e: any): void => {
        setActiveFilter(e.target.innerHTML);
    };

    const handleSortOnClick = (e: any): void => {
        if (e.target.getAttribute('class').includes('arrowDown')) {
            setSortType('release-date-asc');
        } else {
            setSortType('release-date-desc');
        }
    };

    const handleModalClose = (e: any): void => {
        setModal(false);
        setIsDotsClicked(false);
    }

    const handleModalOpen = (e: any): void => {
        const selectedMovie = movies.find( (el: any) => el.id === parseInt(e.target.getAttribute('data-id')));
        setSelectedMovie(selectedMovie);
        setModal(e.target.innerHTML);
    }

    const handleDotsClick = (e: any): void => {
        setIsDotsClicked(e.target.getAttribute('data-id'))
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

    return (
        <>
            <Search onClick={handleModalOpen} />
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
                <ResultsCount number={moviesCounter} />
                <Movies movies={movies} onClick={handleModalOpen} closeOnClick={() => setIsDotsClicked(!isDotsClicked)} dotsOnClick={handleDotsClick} isDotsClicked={isDotsClicked} />
            </div>
            {modal ? <Modal onClick={handleModalClose}>{modalChildren}</Modal> : null}
        </>
    );
};

export default Index;
