import React from 'react';
import './Tag.scss';

interface TagProps {
    tag: string;
}

const Tag: React.FC<TagProps> = ({tag}) => {

    return (
        <span className="tag">{tag}</span>
    );
};

export default Tag;