import React from 'react';
import Movie from './Movie/Movie';
import styles from './Movies.module.scss';

import mockedData from '../../mocked-data.json';

const Movies: React.FC = () => {
    return (
        <div className={styles.movies}>
            {mockedData.map((el) => {
                return <Movie key={el.id} data={el} />;
            })}
        </div>
    );
};

export default Movies;
