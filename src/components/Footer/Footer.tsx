import React from 'react';
import * as URL from '../../routes';
import './Footer.scss';
import logo from '../../assets/logo-white.png';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {

    return (
        <div className='footer'>
            <img src={logo} alt="logo" />
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    );
};

export default Footer;