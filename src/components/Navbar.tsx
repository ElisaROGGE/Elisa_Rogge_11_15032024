import React from 'react';
import * as URL from '../routes';
import './Navbar.scss';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {

    const links = [{
        name: 'Home',
        url: URL.HOME
    }, {
        name: 'A propos',
        url: URL.ABOUT
    }];
    return (
        <nav className='navbar'>
            <img src="../assets/LOGO.png" alt="" />
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;