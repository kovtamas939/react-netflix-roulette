import React from 'react';
import FilterItem from './FilterItem/FilterItem';
import styles from './ResultsFilter.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
    activeFilter: string;
}

const ResultsFilter: React.FC<Props> = ({ onClick, activeFilter }) => {
    return (
        <ul className={styles.resultsFilter}>
            <FilterItem
                onClick={onClick}
                activeFilter={activeFilter}
                type="All"
            />
            <FilterItem
                onClick={onClick}
                activeFilter={activeFilter}
                type="Documentary"
            />
            <FilterItem
                onClick={onClick}
                activeFilter={activeFilter}
                type="Comedy"
            />
            <FilterItem
                onClick={onClick}
                activeFilter={activeFilter}
                type="Horror"
            />
            <FilterItem
                onClick={onClick}
                activeFilter={activeFilter}
                type="Crime"
            />
        </ul>
    );
};

export default ResultsFilter;
