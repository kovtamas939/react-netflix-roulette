import React from 'react';
import styles from './Movie.module.scss';

interface Props {
    data: {
        id: number;
        title: string;
        tagline: string;
        vote_average: number;
        vote_count: number;
        release_date: string;
        poster_path: string;
        overview: string;
        budget: number;
        revenue: number;
        genres: string[];
        runtime: number;
    };
}

const Movie: React.FC<Props> = ({ data }) => {
    return (
        <div className={styles.movie}>
            <img src={data.poster_path} alt="movie" />
            <div className={styles.wrapper}>
                <h3>{data.title}</h3>
                <p className={styles.releaseDate}>
                    {data.release_date.split('-')[0]}
                </p>
            </div>
            <p className={styles.genres}>{data.genres.join(' & ')}</p>
            <div className={styles.dots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>
        </div>
    );
};

export default Movie;
