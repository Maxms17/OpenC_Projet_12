import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

function Header() {
    const location = useLocation(); 

    return (
        <div className='my-header'>
            <nav>
                <Link to="/Portfolio" className={location.pathname === '/Portfolio' ? 'active-link' : ''}>Portfolio</Link>
                <Link to="/Contact" className={location.pathname === '/Contact' ? 'active-link' : ''}>Contact</Link>
                <Link to="/CV" className={location.pathname === '/CV' ? 'active-link' : ''}>Curriculum Vitæ</Link>
            </nav>
        </div>
    );
}

export default Header;
