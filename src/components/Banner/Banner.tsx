import React from 'react';
import './Banner.scss';

interface BannerProps {
    textImage?: string;
    backgroundImage?: string;
}

const Banner: React.FC<BannerProps> = ({ textImage, backgroundImage }) => {

    return (
        <div className='header-home'>
            <img src={backgroundImage} alt="bannerImage" />
            {textImage ? <span>{textImage}</span> :""}
        </div>
    );
};

export default Banner;