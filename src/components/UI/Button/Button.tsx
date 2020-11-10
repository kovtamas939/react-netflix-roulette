import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

interface Props {
    type: 'button' | 'submit' | 'reset' | undefined;
    title: string;
    styleType: string;
    onClick: React.MouseEventHandler;
    id?: number;
}

let cx = classnames.bind(styles);

const Button: React.FC<Props> = ({ type, title, styleType, onClick, id }) => {
    const buttonClasses = cx('btn', {
        btnSearch: styleType === 'search',
        btnSearchIcon: styleType === 'searchIcon',
        btnAddMovie: styleType === 'add-movie',
        btnReleaseDate: styleType.includes('release-date'),
        btnModalClose: styleType === 'modalClose',
        btnInfoBlockClose: styleType === 'infoBlockClose',
        btnInfoBlock: styleType === 'infoBlock',
        btnReset: styleType === 'reset',
        btnSubmit: styleType === 'submit',
        arrowUp: styleType === 'release-date-asc',
        arrowDown: styleType === 'release-date-desc',
    });

    return (
        <button data-id={id} onClick={onClick} className={buttonClasses} type={type}>
            {title}
        </button>
    );
};

export default Button;
