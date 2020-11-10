import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Search from '../../components/Search/Search';
import ResultsFilter from '../../components/ResultsFilter/ResultsFilter';
import ResultsSort from '../../components/ResultsSort/ResultsSort';
import ResultsCount from '../../components/ResultsCount/ResultsCount';
import Movies from '../../components/Movies/Movies';
import Modal from '../../components/UI/Modal/Modal';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import NoMovie from '../../components/NoMovie/NoMovie';
import AddMovie from '../../components/AddMovie/AddMovie';
import EditMovie from '../../components/EditMovie/EditMovie';
import DeleteMovie from '../../components/DeleteMovie/DeleteMovie';
import Message from '../../components/Message/Message';

import styles from './Index.module.scss';

interface Props {
    movies: Movie[];
    filteredMovies: Movie[];
    activeFilter: string;
    onFilterChanged: Function;
    onFilterSelected: Function;
    onSortSelected: Function;
    sortType: string;
    onSortTypeChanged: Function;
    onMovieDeleted: Function;
    modal: boolean | string;
    onSetModal: Function;
    isMovieOpened: boolean,
    movieOpened: Movie | null;
    onMovieOpened: Function;
}

const Index: React.FC<Props> = ({ movies, filteredMovies, activeFilter, onFilterChanged, onFilterSelected, onSortSelected, sortType, onSortTypeChanged, onMovieDeleted, modal, onSetModal, isMovieOpened, movieOpened, onMovieOpened }) => {
    const [moviesCounter, setMoviesCounter] = useState<number>(0);
    const [selectedMovie, setSelectedMovie] = useState<any>();
    const [isDotsClicked, setIsDotsClicked] = useState<boolean>(false);

    useEffect(() => {
        setMoviesCounter(filteredMovies.length);
    },[filteredMovies]);

    useEffect(() => {
        onSortSelected(sortMovies(filteredMovies));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[sortType]);

    useEffect(() => {
        onSortSelected(sortMovies(movies));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movies])

    const sortMovies = (movies: Movie[]) => {
        let sortedMovies = movies.slice().sort((movieOne: {release_date: string}, movieTwo: {release_date: string}) => (new Date(movieOne.release_date) as any) - (new Date(movieTwo.release_date) as any))
        if (sortType === 'release-date-desc') {
            sortedMovies = sortedMovies.reverse();
        }
        return sortedMovies;
    }

    const handleFilterOnClick = (e: any): void => {
        onFilterChanged(e.target.innerHTML);

        if(e.target.innerHTML === 'All') {
            onFilterSelected(sortMovies(movies));
        } else {
            const newMoviesList = movies.filter((el: Movie) => {
                const genresArray = Object.keys(el.genres).map((key: any) => el.genres[key]);
                return (genresArray.includes(e.target.innerHTML)) ? el : null;
            })
            onFilterSelected(sortMovies(newMoviesList));
        }
    };

    const handleSortOnClick = useCallback((e: any): void => {
        if (e.target.getAttribute('class').includes('arrowDown')) {
            onSortTypeChanged('release-date-asc');
        } else {
            onSortTypeChanged('release-date-desc');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleModalClose = (): void => {
        onSetModal(false);
        setIsDotsClicked(false);
    }

    const handleModalOpen = (e: any): void => {
        const selectedMovie = filteredMovies.find( (el: {id: number}) => el.id === parseInt(e.target.getAttribute('data-id')));
        setSelectedMovie(selectedMovie);
        onSetModal(e.target.innerHTML);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    const handleDotsClick = (e: any): void => {
        setIsDotsClicked(e.target.getAttribute('data-id'));
    };

    const handleMovieOpen = (e: any): void => {
        const selectedMovie = filteredMovies.find( (el: Movie) => el.id === parseInt(e.target.getAttribute('data-id')));
        onMovieOpened(true, selectedMovie);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const handleDeleteMovie = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        onMovieDeleted(selectedMovie.id, movies, filteredMovies, isMovieOpened, movieOpened);
    };

    let modalChildren = null;
    switch(modal) {
        case '+ add movie':
            modalChildren = <AddMovie onClick={handleModalClose} />;
            break;
        case 'edit':
            modalChildren = <EditMovie selectedMovie={selectedMovie} onClick={handleModalClose} />;
            break;
        case 'delete':
            modalChildren = <DeleteMovie closeOnClick={handleModalClose} buttonOnClick= {handleDeleteMovie} />;
            break;
        case 'deleteMovieSuccess':
            modalChildren = <Message closeOnClick={handleModalClose} icon='✓' title='Congratulations!' message='The movie has been deleted successfully' />;
            break;
        case 'addMovieSuccess':
            modalChildren = <Message closeOnClick={handleModalClose} icon='✓' title='Congratulations!' message='The movie has been added to database successfully' />;
            break;
        case 'editMovieSuccess':
            modalChildren = <Message closeOnClick={handleModalClose} icon='✓' title='Congratulations!' message='The movie has been edited successfully' />;
            break;
        case 'errorCRUD':
            modalChildren = <Message closeOnClick={handleModalClose} icon='✕' title='Something went wrong!' message='Please try again later!' />
            break;
    };
    
    let availableMovies;
    if(movies.length === 0) {
        availableMovies = <NoMovie />;
    } else {
        availableMovies = <><ResultsCount number={moviesCounter} />
        <Movies movies={filteredMovies} buttonOnClick={handleModalOpen} closeOnClick={() => setIsDotsClicked(!isDotsClicked)} dotsOnClick={handleDotsClick} movieOnClick={handleMovieOpen} isDotsClicked={isDotsClicked} /></>
    }

    return (
        <>
            {isMovieOpened ? <MovieDetails data={movieOpened} onClick={() => onMovieOpened(false)} /> : <Search onClick={handleModalOpen} />}
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

const mapStateToProps = (state: AllState) => {
    return {
        movies: state.movies.movies,
        filteredMovies: state.movies.filteredMovies,
        activeFilter: state.filterAndSort.activeFilter,
        sortType: state.filterAndSort.sortType,
        modal: state.movies.modal,
        isMovieOpened: state.movies.isMovieOpened,
        movieOpened: state.movies.movieOpened
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onFilterSelected: (filteredMovies: Movie[]) => dispatch(actions.setFilteredMovies(filteredMovies)),
        onSortSelected: (sortedMovies: Movie[]) => dispatch(actions.setSortedMovies(sortedMovies)),
        onMovieDeleted: (movie: string, movies: Movie[], filteredMovies: Movie[], isMovieOpened: boolean, movieOpened: Movie | null) => dispatch(actions.deleteMovie(movie, movies, filteredMovies, isMovieOpened, movieOpened)),
        onFilterChanged: (activeFilter: string) => dispatch(actions.setActiveFilter(activeFilter)),
        onSortTypeChanged: (sortType: string) => dispatch(actions.setSortType(sortType)),
        onSetModal: (modalType: false | string) => dispatch(actions.setModal(modalType)),
        onMovieOpened: (isMovieOpened: boolean, movieOpened: Movie | null) => dispatch(actions.setMovieOpened(isMovieOpened, movieOpened))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
