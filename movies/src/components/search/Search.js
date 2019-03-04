import React from "react";
import { SEARCH_BUTTON } from '../../environment/const';
import SearchFilter from './SearchFilter';

class Search extends React.Component {
  render = () => {
    return (
      <div>
        <input />
        <button>{SEARCH_BUTTON}</button>
        <SearchFilter/>
      </div>
    );
  };
}
export default Search;
