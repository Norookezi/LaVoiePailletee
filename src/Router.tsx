import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import StreamersPage from './pages/StreamersPage';
import PartnerPage from './pages/PartnerPage';
import CookiePage from './pages/Cookies';

import { CookieService } from './services/cookie.service';
import { Analystic } from './services/analystic.service';

const cookieService = new CookieService();
const analyticsService = new Analystic();

const App: React.FC = () => {
    const location = useLocation();
    
    useEffect(() => {
        const hasAnalyticsConsent = cookieService.get('Analytics') === true;
      
        if (hasAnalyticsConsent && analyticsService.isInitNeeded) {
            analyticsService.initGA();
        }
      
        if (hasAnalyticsConsent) {
            analyticsService.pageView(location);
        }
    }, [location, cookieService, analyticsService]);
    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/partenaires" element={<PartnerPage />} />
            <Route path="/cookies" element={<CookiePage />} />
            <Route path="/streamers" element={<StreamersPage />} />
        </Routes>
    );
};

export default App;
