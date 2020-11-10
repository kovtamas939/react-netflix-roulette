import React from 'react'
import Button from '../UI/Button/Button';
import styles from './Message.module.scss';

interface Props {
    closeOnClick: React.MouseEventHandler;
    icon: string;
    title: string;
    message: string;
}

const Message: React.FC<Props> = ({ closeOnClick, icon, title, message }) => {
    return (
        <div className={styles.message}>
            <Button onClick={closeOnClick} type="button" title="&#10005;" styleType="modalClose"/>
            <div className={styles.icon}>{icon}</div>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    )
};

export default Message;
