import React from 'react';
// Components
import Search from '../search';
// Router
import { Link } from 'react-router-dom';
// Style
import style from './header.styl';
// Images
import logo from '../../assets/static/logo.png';

const Header = () => {
    return (
        <nav className={style.navbar}>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <Link className="navbar-brand" to="/">
                    <img src={logo} height="48px" />
                </Link>
                <Link to="/search">
                    <i className="material-icons md-32 clickable" >
                        search
                    </i>
                </Link>
            </div>
        </nav>
    );
};

export default Header;