import React from 'react';
import { BASE_IMG_CLASSNAME } from '../../environment/const';

const MovieCover = (props) => {
    const { title, type, url } = props;
    return (
        <img src={url} alt={title} className={`${BASE_IMG_CLASSNAME}_${type}`}></img>
    )
}

export default MovieCover;