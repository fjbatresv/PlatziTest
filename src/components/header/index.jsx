import React from 'react';
import RcIf, {RcElse} from 'rc-if';
import './header.scss';
import logo from '../../assets/static/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__menu'>
                <ul>
                    <li>
                            <img src={logo} height='48px' />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;