import React from 'react';
import styles from './Backdrop.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
}

const Backdrop: React.FC<Props> = ({ onClick }) => {
    return (
        <div className={styles.backdrop} onClick={onClick}></div>
    )
}

export default Backdrop;