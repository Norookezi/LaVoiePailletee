import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import Cookies from './components/reusable-ui/Cookies';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Cookies />
        <Router />
    </React.StrictMode>
);