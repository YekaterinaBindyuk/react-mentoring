import React from 'react';
import {MOVIES_COUNT_TEXT} from '../../environment/const';

const MoviesCount = (props) => {
    const {count} = props;
    return(
        <div>{count} {MOVIES_COUNT_TEXT}</div>
    )
}

export default MoviesCount;