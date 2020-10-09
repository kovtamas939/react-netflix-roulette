import React, { Component, ReactNode } from 'react';

interface State {
    hasError: boolean;
}

interface Props {
    children: ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(errorInfo);
    }

    render() {
        return this.state.hasError ? <h1>Something went wrong..</h1> : this.props.children
    }
}

export default ErrorBoundary;
