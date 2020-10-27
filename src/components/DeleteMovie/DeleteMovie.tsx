import React from 'react'
import Button from '../UI/Button/Button';
import styles from './DeleteMovie.module.scss';

interface Props {
    closeOnClick: React.MouseEventHandler;
    buttonOnClick: React.MouseEventHandler;
}

const DeleteMovie: React.FC<Props> = ({ closeOnClick, buttonOnClick }) => {
    return (
        <div className={styles.deleteMovie}>
            <Button onClick={closeOnClick} type="button" title="&#10005;" styleType="modalClose"/>
            <h3>delete movie</h3>
            <p>Are you sure you want to delete this movie?</p>
            <form>
                <div className={styles.buttons}>
                    <Button onClick={buttonOnClick} type="submit" title="submit" styleType="submit"/>
                </div>

            </form>
        </div>
    )
};

export default DeleteMovie;
