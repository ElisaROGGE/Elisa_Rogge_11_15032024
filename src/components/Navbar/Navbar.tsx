import React from 'react';
import * as URL from '../../routes';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

    const links = [{
        name: 'Accueil',
        url: URL.HOME
    }, {
        name: 'A propos',
        url: URL.ABOUT
    }];
    return (
        <nav className='navbar'>
            <Link to={URL.HOME}>
                <img src={logo} alt="logo" />
            </Link>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.url}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;