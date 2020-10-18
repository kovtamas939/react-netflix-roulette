import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../UI//Button/Button';
import styles from './MovieDetails.module.scss';

interface Props {
    data: any;
    onClick: React.MouseEventHandler;
}

const MovieDetails: React.FC<Props> = ({ data, onClick }) => {

    return (
        <div className={styles.MovieDetails}>
            <div className={styles.header}>
                <Logo />
                <Button
                    onClick={onClick}
                    type="button"
                    title="🔎"
                    styleType="searchIcon"/>
            </div>
            <div className={styles.movie}>
                <div className={styles.image}>
                    <img src={data.poster_path} alt="Movie poster"/>
                </div>
                <div className={styles.movieTexts}>
                    <div className={styles.wrapper}>
                        <h3 className={styles.title}>{data.title}</h3>
                        <div className={styles.voteAverage}><p>{data.vote_average}</p></div>
                    </div>
                    <p className={styles.genres}>{data.genres.join(' & ')}</p>
                    <div className={styles.wrapper}>
                        <p className={styles.releaseDate}>{data.release_date.split('-')[0]}</p>
                        <p className={styles.runtime}>{`${data.runtime} min`}</p>
                    </div>
                    <p className={styles.overview}>{data.overview}</p>
                </div>
            </div>
        </div>
    )
};

export default MovieDetails;
