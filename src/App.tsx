import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import PaintingsPage from './pages/PaintingsPage';
import SculpturesPage from './pages/SculpturesPage';
import OtherWorksPage from './pages/OtherWorksPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/sculptures" element={<SculpturesPage />} />
        <Route path="/other-works" element={<OtherWorksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
