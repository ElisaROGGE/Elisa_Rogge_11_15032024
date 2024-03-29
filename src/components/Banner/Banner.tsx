import React from 'react';
import './Banner.scss';
import backgroundImage from '../../assets/bg-home.png'

interface BannerProps {
    textImage?: string;
}

const Banner: React.FC<BannerProps> = ({ textImage }) => {

    return (
        <div className='header-home'>
            <img src={backgroundImage} alt="bannerImage" />
            {textImage ? <span>{textImage}</span> :""}
        </div>
    );
};

export default Banner;