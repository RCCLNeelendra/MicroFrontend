import './index.css';
import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';

const MicroFrontendContainer = lazy(() => import('./components/MicroFrontendContainer'));

const DashboardShellApp = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/micro-frontend" element={<MicroFrontendContainer />} />
      </Routes>
    </Suspense>
  </Router>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<DashboardShellApp />);

// Measure performance
reportWebVitals(console.log);