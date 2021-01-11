import React from 'react';
import Search from '../search';
import './header.scss';
import logo from '../../assets/static/logo.png';

const Header = () => {
    return (
        <nav class="navbar">
            <div class="w-100 d-flex justify-content-between align-items-center">
                <a class="navbar-brand" href="#">
                    <img src={logo} height="48px" />
                </a>
                <Search />
            </div>
        </nav>
    );
};

export default Header;