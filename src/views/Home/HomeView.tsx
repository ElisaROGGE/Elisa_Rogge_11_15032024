import React, { useEffect, useState } from 'react';
import './HomeView.scss'
import jsonData from '../../data.json'
import { IData } from '../../types/locationType';
import { Link } from 'react-router-dom';
import * as URL from '../../routes';
import backgroundImage from '../../assets/bg-home.png'

const HomeView = () => {

    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        setData(jsonData);
    }, []);

    return (
        <div className='home'>
            <div className='header-home'>
                <img src={backgroundImage} alt="Chez vous, partout et ailleurs" />
                <span>Chez vous, partout et ailleurs</span>
            </div>
            <div className='locations'>
                {data.map((d) => (
                    <Link key={d.id} to={`${URL.LOCATION}/${d.id}`}>
                        <div key={d.id} className='location'>
                            <img src={d.pictures[0]} alt="" />
                            <span>{d.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomeView;