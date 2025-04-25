import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.Suspense>
        <Router>
            <App></App>
        </Router>
    </React.Suspense>
);