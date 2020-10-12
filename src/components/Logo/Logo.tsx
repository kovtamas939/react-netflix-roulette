import React from 'react';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
    return (
        <p className={styles.logo}>
            netflix<span>roulette</span>
        </p>
    );
};

export default Logo;
