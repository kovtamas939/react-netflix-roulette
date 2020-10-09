import React from 'react';
import Index from './containers/Index/Index';
import Layout from './components/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <Layout>
                <Index />
            </Layout>
        </ErrorBoundary>
    );
};

export default App;
