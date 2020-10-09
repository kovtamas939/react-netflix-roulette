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
                type="all"
            />
            <FilterItem
                onClick={onClick}
                activeFilter={activeFilter}
                type="documentary"
            />
            <FilterItem
                onClick={onClick}
                activeFilter={activeFilter}
                type="comedy"
            />
            <FilterItem
                onClick={onClick}
                activeFilter={activeFilter}
                type="horror"
            />
            <FilterItem
                onClick={onClick}
                activeFilter={activeFilter}
                type="crime"
            />
        </ul>
    );
};

export default ResultsFilter;
