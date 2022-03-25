import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navigation">
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
                <a href="/contacts">Contacts</a>
            </div>
        </div>
    );
};

export default Header;