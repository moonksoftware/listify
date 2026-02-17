import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Projects from './pages/Projects';


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="font-sans">
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/listify" element={<Home />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
