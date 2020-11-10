import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './Movie.module.scss';

interface Props {
    data: Movie;
    buttonOnClick: React.MouseEventHandler;
    closeOnClick: React.MouseEventHandler;
    dotsOnClick: React.MouseEventHandler;
    movieOnClick: React.MouseEventHandler;
    isDotsClicked: boolean;
}

const Movie: React.FC<Props> = ({ data, buttonOnClick, closeOnClick, dotsOnClick, movieOnClick, isDotsClicked }) => {

    let infoBlock;
    if(isDotsClicked) {
        infoBlock = <div className={styles.infoBlock}>
            <Button onClick={closeOnClick} type="button" title="&#10005;" styleType="infoBlockClose"/>
            <Button onClick={buttonOnClick} id={data.id} type="button" title="edit" styleType="infoBlock"/>
            <Button onClick={buttonOnClick} id={data.id} type="button" title="delete" styleType="infoBlock"/>
        </div>
    } else {
        infoBlock = <div data-id={data.id} className={styles.dots} onClick={dotsOnClick}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>
    }

    return (
        <div className={styles.movie}>
            <img src={data.poster_path} alt="movie" data-id={data.id} onClick={movieOnClick} onError={(e: any)=>{ e.target.onerror = null; e.target.src="http://localhost:3000/img/no_image_found.jpg" }} />
            <div className={styles.wrapper}>
                <h3>{data.title}</h3>
                <p className={styles.releaseDate}>
                    {data.release_date.split('-')[0]}
                </p>
            </div>
            <p className={styles.genres}>{data.genres.join(' & ')}</p>
            {infoBlock}
        </div>
    );
};

export default Movie;
