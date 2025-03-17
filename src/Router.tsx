import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import StreamersPage from "./pages/StreamersPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/streamers" element={<StreamersPage />} />
      </Routes>
    </Router>
  );
};

export default App;