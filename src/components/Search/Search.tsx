import React from 'react';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Search.module.scss';

const Search: React.FC = () => {
    return (
        <div className={styles.search}>
            <div className={styles.header}>
                <Logo />
                <Button
                    type="button"
                    title="+ add movie"
                    styleType="add-movie"
                />
            </div>

            <div className={styles.findMovies}>
                <h2>find your movie</h2>
                <form>
                    <Input />
                    <Button type="submit" title="search" styleType="submit" />
                </form>
            </div>
        </div>
    );
};

export default Search;
