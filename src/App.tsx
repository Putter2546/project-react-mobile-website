import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import './styles/mobile.css';

import ItemBox from './components/ItemBox';
import './styles/ItemBox.css';



const App: React.FC = () => {
  return (
    <Router>
      <div>
        <MobileNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Example usage of ItemBox */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ItemBox
            image={require('./assets/images/Natur_SMART.jpg')}
            type="Electronics"
            name="Smartphone"
            price={299.99}
            onViewDetail={() => alert('View details for Smartphone')}
            onAddItem={() => alert('Added Smartphone to cart')}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;