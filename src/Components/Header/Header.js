import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { RiShoppingCartFill } from 'react-icons/ri'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className="logo">
                    <img src={logo} alt="" />
                    <span className='cart-icon'><RiShoppingCartFill/><sup>0</sup></span>
                </div>
                <div className="navigation">
                    <a href="/home">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/about">About</a>
                    <a href="/contacts">Contacts</a>
                </div>
            </div>
        </div>
    );
};

export default Header;