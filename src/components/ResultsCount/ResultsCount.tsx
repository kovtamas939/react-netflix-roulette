import React from 'react';
import styles from './ResultsCount.module.scss';

interface Props {
    number: number;
}

const ResultsCount: React.FC<Props> = ({ number }) => {
    return (
        <p className={styles.resultsCount}>
            {number} <span>movies found</span>
        </p>
    );
};

export default ResultsCount;
