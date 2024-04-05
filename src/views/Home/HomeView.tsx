import React, { useEffect, useState } from 'react';
import './HomeView.scss'
import jsonData from '../../data.json'
import { IData } from '../../types/locationType';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import backgroundImage from '../../assets/bg-home.png';

const HomeView = () => {

    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        setData(jsonData);
    }, []);

    return (
        <div className='home'>
            <Banner textImage='Chez vous, partout et ailleurs' backgroundImage={backgroundImage}/>
            <div className='locations'>
                {data.map((d) => (
                    <Card key={d.id} data={d} />
                ))}
            </div>
        </div>
    );
};

export default HomeView;