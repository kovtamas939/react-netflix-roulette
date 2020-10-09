import React from 'react';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

const Layout: React.FC = ({ children }) => {
    return (
        <div className={styles.layoutWrapper}>
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
