import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/mobile.css';

const MobileNavbar: React.FC = () => {
    return (
        <nav className="mobile-navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
};

export default MobileNavbar;