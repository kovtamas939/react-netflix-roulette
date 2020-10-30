import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Button from '../UI/Button/Button';
import styles from './Search.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
    onFetchMovies: Function;
    onFilterChanged: Function;
}

const Search: React.FC<Props> = ({ onClick, onFetchMovies, onFilterChanged }) => {
    const [searchForm, setSearchForm] = useState<string>('');

    const handleValueChange = (e: InputType): void => {
        setSearchForm(e.target.value);
    }

    const handleSendForm = (e: ButtonType): void => {
        e.preventDefault();
        onFilterChanged('All');
        onFetchMovies(searchForm.split(' ').join('%20'));
        setSearchForm('');
    }

    return (
        <div className={styles.search}>
            <div className={styles.header}>
                <Logo />
                <Button
                    onClick={onClick}
                    type="button"
                    title="+ add movie"
                    styleType="add-movie"
                />
            </div>

            <div className={styles.findMovies}>
                <h2>find your movie</h2>
                <form>
                    <Input onChange={handleValueChange} value={searchForm} />
                    <Button type="submit" title="search" styleType="search" onClick={handleSendForm} />
                </form>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return { 
        onFetchMovies: (searchQuery: string) =>  dispatch(actions.fetchMovies(searchQuery)),
        onFilterChanged: (activeFilter: string) => dispatch(actions.setActiveFilter(activeFilter)),

    }
}

export default connect(null, mapDispatchToProps)(Search);
