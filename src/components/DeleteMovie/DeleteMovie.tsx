import React from 'react'
import Button from '../UI/Button/Button';
import styles from './DeleteMovie.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
}

const DeleteMovie: React.FC<Props> = ({ onClick }) => {
    return (
        <div className={styles.deleteMovie}>
            <Button onClick={onClick} type="button" title="&#10005;" styleType="modalClose"/>
            <h3>delete movie</h3>
            <p>Are you sure you want to delete this movie?</p>
            <form>
                <div className={styles.buttons}>
                    <Button type="submit" title="submit" styleType="submit"/>
                </div>

            </form>
        </div>

    )
}

export default DeleteMovie;
