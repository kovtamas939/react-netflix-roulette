import React from 'react';
import styles from './Input.module.scss';

interface Props {
    onChange: React.ChangeEventHandler,
    value: string
}

const Input: React.FC<Props> = ({ onChange, value }) => {
    return (
        <input
            className={styles.input}
            type="text"
            onChange={onChange}
            value={value}
            placeholder="What do you want to watch?"
        />
    );
};

export default Input;
