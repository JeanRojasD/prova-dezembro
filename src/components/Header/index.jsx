import React from 'react'
import Menu from '../Menu'
import logo from '../../assets/images/logo.png'
import './index.css'


function Header() {
    return (
        <div className="header-background">
            <div className="header-logo">
                <img src={logo} alt="logo"></img>
            </div>
            <Menu />
        </div>
    );
}

export default Header;