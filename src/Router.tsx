import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cookies from "universal-cookie";

import HomePage from "./pages/HomePage";
import StreamersPage from "./pages/StreamersPage";
import ReactGA from "react-ga4";

const cookies = new Cookies();

function setTracers() {
  const cookiesInterval = setInterval(() => {
    const cookieState: string = cookies.get("cookies") ?? 'pending';

    if (cookieState !== "pending") clearInterval(cookiesInterval);
    if (cookieState === "granted" || cookieState.includes("Analytics")) setupAnalystics();
    if (cookieState === "granted" || cookieState.includes("Referer")) setRef();
    
  }, 1000);
}
function setupAnalystics() {
  if (!process.env.REACT_APP_GOOGLE_ANALYTICS){
    console.error('Google Analytics id missing');
    return;
  } 
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS!);
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: `La voie pailletée (${process.env.NODE_ENV})`,
  });
}

function setRef() {
    const searchParams = new URLSearchParams(document.location.search);
  
    // Set expiry date to 24h
    const date = new Date().getTime() + 24 * 3600 * 1000;
  
    const ref: string = searchParams.get("ref") ?? "NoRef";
  
    if (ref === "NoRef") return;
  
    cookies.set("ref", ref, {
      expires: new Date(date),
      sameSite: "strict",
      secure: true,
      domain: document.location.hostname,
    });
}

const App: React.FC = () => {
  useEffect(() => setTracers(), []);
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
