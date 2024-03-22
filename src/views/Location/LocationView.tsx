import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../data.json';

const LocationView = () => {
    const { id } = useParams<{ id: string }>();
    const locationData = jsonData.find((location) => location.id === id);
    console.log(locationData)

    return (
        <div className='location-detail'>
            
        </div>
    );
};

export default LocationView;