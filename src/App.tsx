import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import './styles/mobile.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <MobileNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;