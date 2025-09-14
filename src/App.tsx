import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import './styles/mobile.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <MobileNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;