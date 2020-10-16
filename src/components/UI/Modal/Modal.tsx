import React, { ReactNode } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.scss';

interface Props {
    children: ReactNode;
    onClick: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({ children, onClick }) => {
    return (
            <>
                <Backdrop onClick={onClick}/>
                <div className={styles.modal} >
                    {children}
                </div>
            </>
    )
}

export default Modal;