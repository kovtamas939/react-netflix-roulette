import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './AddMovie.module.scss';

interface Props {
    onClick: React.MouseEventHandler;
}

const AddMovie: React.FC<Props> = ({ onClick }) => {
    return (
        <div className={styles.addMovie}>
            <Button onClick={onClick} type="button" title="&#10005;" styleType="modalClose"/>
            <h3>add movie</h3>
            <form>
                <Input elementType='input' label='title' placeholder='Title here' />
                <Input elementType='date' label='release date' placeholder='Select Date' />
                <Input elementType='url' label='movie url' placeholder='Movie URL here' />
                <Input elementType='select' label='genre' />
                <Input elementType='text' label='overview' placeholder='Overview here' />
                <Input elementType='text' label='runtime' placeholder='Runtime here' />
                <div className={styles.buttons}>
                    <Button type="button" title="reset" styleType="reset"/>
                    <Button type="submit" title="submit" styleType="submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddMovie;
