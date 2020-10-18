import React from 'react';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Button from '../UI/Button/Button';
import styles from './Search.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
}

const Search: React.FC<Props> = React.memo( ({ onClick }) => {
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
                    <Input />
                    <Button type="submit" title="search" styleType="search" />
                </form>
            </div>
        </div>
    );
});

export default Search;
