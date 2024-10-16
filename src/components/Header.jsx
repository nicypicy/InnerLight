// Header.jsx
// import React from 'react';
import '../styles/Header.css'; // Ensure this path is correct

function Header() {
    return (
        <header className="header">
            <img className='innerlight-logo' src='/spiritual-wellness.png' alt='Boy meditating' />
            <h1>InnerLight</h1>
            <nav>
                <ul>
                    <li><a href="#home">Sign In</a></li>
                    <li><a href="#genres">Genres</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
