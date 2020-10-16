import React from 'react';
import Button from '../UI/Button/Button';
import styles from './ResultsSort.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
    styleType: string;
}

const ResultsSort: React.FC<Props> = ({ onClick, styleType }) => {
    return (
        <div className={styles.resultsSort}>
            <p>sort by</p>
            <Button
                type="button"
                title="release date"
                styleType={styleType}
                onClick={onClick}
            />
        </div>
    );
};

export default ResultsSort;
