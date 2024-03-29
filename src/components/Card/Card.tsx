import React from 'react';
import { Link } from 'react-router-dom';
import { IData } from '../../types/locationType';

interface CardProps {
    data: IData;
}

const Card: React.FC<CardProps> = ({data}) => {

    return (
        <div className='card'>
            <Link key={data.id} to={`location/${data.id}`}>
                <div key={data.id} className='location'>
                    <img src={data.pictures[0]} alt="" />
                    <span>{data.title}</span>
                </div>
            </Link>
        </div>
    );
};

export default Card;