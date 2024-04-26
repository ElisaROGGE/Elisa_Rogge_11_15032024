import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo-white.png';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {

    return (
        <footer className='footer'>
            <img src={logo} alt="logo" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;