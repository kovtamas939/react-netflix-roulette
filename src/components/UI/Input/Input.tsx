import React from 'react';
import MultiSelect from "react-multi-select-component";
import styles from './Input.module.scss';
import './DropdownInput.scss';

interface Props {
    elementType: string;
    label: string;
    placeholder?: string;
    value?: any;
    onChange?: React.ChangeEventHandler;
}

const Input: React.FC<Props> = ({ elementType, label, placeholder, value, onChange }) => {
    const options = [
        { label: "Crime", value: "Crime" },
        { label: "Documentary", value: "Documentary" },
        { label: "Horror", value: "Horror" },
        { label: "Comedy", value: "Comedy" },
    ];

    let inputElement = null;
    
    switch ( elementType ) {
        case ( 'input' ):
            inputElement = <input data-type={label} type={elementType} className={styles.inputElement} placeholder={placeholder} value={value} onChange={onChange} />;
            break;
        case ( 'date' ):
            inputElement = <input data-type={label} type={elementType} className={styles.inputElement} placeholder={placeholder} value={value} onChange={onChange} />;
            break;
        case ( 'url' ):
            inputElement = <input data-type={label} type={elementType} className={styles.inputElement} placeholder={placeholder} value={value} onChange={onChange} />;
            break;
        case( 'select'):
            inputElement = <MultiSelect disableSearch options={options} value={value} onChange={onChange} labelledBy={"Select"} hasSelectAll={false} className={styles.inputElement} />
            break;
        case( 'text' ):
            inputElement = <input data-type={label} type={elementType} className={styles.inputElement} placeholder={placeholder} value={value} onChange={onChange} />;
            break;
    }
    
    return (
        <div className={styles.input}>
            <label className={styles.label}>{label}</label>
            {inputElement}
        </div>
    )
}

export default Input;
