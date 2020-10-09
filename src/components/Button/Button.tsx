import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

interface Props {
    type: 'button' | 'submit' | 'reset' | undefined;
    title: string;
    styleType: string;
    onClick?: React.MouseEventHandler;
}

let cx = classnames.bind(styles);

const Button: React.FC<Props> = ({ type, title, styleType, onClick }) => {
    const buttonClasses = cx('btn', {
        btnSubmit: styleType === 'submit',
        btnAddMovie: styleType === 'add-movie',
        btnReleaseDate: styleType.includes('release-date'),
        arrowUp: styleType === 'release-date-ans',
        arrowDown: styleType === 'release-date-desc',
    });

    return (
        <button onClick={onClick} className={buttonClasses} type={type}>
            {title}
        </button>
    );
};

export default Button;
