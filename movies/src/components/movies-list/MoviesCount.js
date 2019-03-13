import React from 'react';
import {MOVIES_COUNT_TEXT} from '../../environment/const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MoviesCount = (props) => {
    const {count} = props;
    return(
        <div className="movies-count"><FontAwesomeIcon icon="film" className="mr-1 ml-5"/><span>{count} {MOVIES_COUNT_TEXT}</span></div>
    )
}

export default MoviesCount;