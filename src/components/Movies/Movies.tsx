import React from 'react';
import Movie from './Movie/Movie';
import styles from './Movies.module.scss';

interface Props {
    movies: any;
    onClick: React.MouseEventHandler;
    closeOnClick: React.MouseEventHandler;
    dotsOnClick: React.MouseEventHandler;
    isDotsClicked: boolean | string;
}

const Movies: React.FC<Props> = ({ movies, onClick, closeOnClick, dotsOnClick, isDotsClicked }) => {
    return (
        <div className={styles.movies}>
            {movies.map((el: any) => {
                return <Movie key={el.id} data={el} onClick={onClick} closeOnClick={closeOnClick} isDotsClicked={isDotsClicked === String(el.id) ? true : false } dotsOnClick={dotsOnClick}  />;
            })}
        </div>
    );
};

export default Movies;