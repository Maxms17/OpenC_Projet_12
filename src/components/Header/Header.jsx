import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importez useLocation depuis react-router-dom
//import logo from '../../assets/LOGO.jpg'
import './Header.css'

function Header() {
    const location = useLocation(); // Obtenez l'objet location du routeur

    //<img src={logo} alt='Kasa' className='my-logo' />
    return (
        <div className='my-header'>
        
        <nav>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Accueil</Link>
            <Link to="/Contact" className={location.pathname === '/Contact' ? 'active-link' : ''}>Contact</Link>
        </nav>
        </div>
    );
}

export default Header;
