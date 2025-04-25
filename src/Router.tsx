import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import StreamersPage from './pages/StreamersPage';
import PartnerPage from './pages/PartnerPage';

const App: React.FC = () => {
    const location = useLocation();
    
    useEffect(() => {
        console.log(`Location changed: ${location}`);
    }, [location]);
    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/partenaires" element={<PartnerPage />} />
            <Route path="/streamers" element={<StreamersPage />} />
        </Routes>
    );
};

export default App;
