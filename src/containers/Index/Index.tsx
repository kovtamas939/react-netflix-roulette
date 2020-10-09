import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import ResultsFilter from '../../components/ResultsFilter/ResultsFilter';
import ResultsSort from '../../components/ResultsSort/ResultsSort';
import ResultsCount from '../../components/ResultsCount/ResultsCount';
import Movies from '../../components/Movies/Movies';
import styles from './Index.module.scss';

const Index: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [sortType, setSortType] = useState<string>('release-date-desc');

    const handleFilterOnClick = (e: any): void => {
        setActiveFilter(e.target.innerHTML);
    };

    const handleSortOnClick = (e: any): void => {
        if (e.target.getAttribute('class').includes('arrowDown')) {
            setSortType('release-date-ans');
        } else {
            setSortType('release-date-desc');
        }
    };

    return (
        <>
            <Search />
            <div className={styles.indexWrapper}>
                <div className={styles.resultModifiers}>
                    <ResultsFilter
                        onClick={handleFilterOnClick}
                        activeFilter={activeFilter}
                    />
                    <ResultsSort
                        styleType={sortType}
                        onClick={handleSortOnClick}
                    />
                </div>
                <ResultsCount number={39} />
                <Movies />
            </div>
        </>
    );
};

export default Index;
