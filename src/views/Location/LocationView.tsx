import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './LocationView.scss';

const LocationView = () => {
    const { id } = useParams<{ id: string }>();
    const locationData = jsonData.find((location) => location.id === id);
    console.log(locationData)

    return (
        <div className='location-detail'>
            <Swiper
                navigation={true} 
                modules={[Navigation]}
                className="mySwiper"
            >
                {locationData?.pictures.map((picture, index) => (
                    <SwiperSlide key={index}>
                        <img src={picture} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LocationView;