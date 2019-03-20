import React from 'react';
import {MOVIES_COUNT_TEXT} from '../../environment/const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchResultsCount = (props) => {
    const {count} = props;
    return(
        <div className="movies-count">
        <div className="badge badge-dark p-2"><FontAwesomeIcon icon="film" className="mlr-1"/><span>{MOVIES_COUNT_TEXT} <span className="badge badge-light">{count}</span></span></div>
        </div>
    )
}

export default SearchResultsCount;