import React from 'react';
import classnames from 'classnames/bind';
import styles from './FilterItem.module.scss';

interface Props {
    type: string;
    activeFilter: string;
    onClick: React.MouseEventHandler;
}

let cx = classnames.bind(styles);

const FilterItem: React.FC<Props> = ({ type, activeFilter, onClick }) => {
    const liClasses = cx('filterItem', {
        activeFilter: activeFilter === type,
    });

    return (
        <li onClick={onClick} className={liClasses}>
            {type}
        </li>
    );
};

export default FilterItem;
