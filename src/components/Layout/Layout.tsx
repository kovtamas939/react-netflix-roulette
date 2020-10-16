import React from 'react';
import Footer from '../Footer/Footer';
import './Layout.module.scss';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
