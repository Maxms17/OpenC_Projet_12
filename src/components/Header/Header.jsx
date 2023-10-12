import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

function Header() {
    const location = useLocation(); 

    return (
        <div className='my-header'>
            <div className='my-name'>
                <h1>DREUX Maxime</h1>
            </div>
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Accueil</Link>
                <Link to="/Contact" className={location.pathname === '/Contact' ? 'active-link' : ''}>Contact</Link>
                <Link to="/CV" className={location.pathname === '/CV' ? 'active-link' : ''}>CV</Link>
            </nav>
        </div>
    );
}

export default Header;
