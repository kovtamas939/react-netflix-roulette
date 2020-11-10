import React from 'react';
import Movie from './Movie/Movie';
import styles from './Movies.module.scss';

interface Props {
    movies: Movie[];
    buttonOnClick: React.MouseEventHandler;
    closeOnClick: React.MouseEventHandler;
    dotsOnClick: React.MouseEventHandler;
    movieOnClick: React.MouseEventHandler;
    isDotsClicked: boolean | string;
}

const Movies: React.FC<Props> = ({ movies, buttonOnClick, closeOnClick, dotsOnClick, movieOnClick, isDotsClicked }) => {
    return (
        <div className={styles.movies}>
            {movies.map((el: Movie) => {
                return <Movie key={el.id} data={el} buttonOnClick={buttonOnClick} closeOnClick={closeOnClick} movieOnClick={movieOnClick} isDotsClicked={isDotsClicked === String(el.id) ? true : false } dotsOnClick={dotsOnClick}  />;
            })}
        </div>
    );
};

export default Movies;
