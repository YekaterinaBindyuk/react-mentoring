import React from "react";
import { SEARCH_BUTTON } from '../../environment/const';
import SearchType from './SearchType';

class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {search: null};
  }

  onSearchValueChange = e => {
    this.setState({
      search: e.target.value
    });
  }

  render = () => {
    return (
      <div>
        <input onChange={this.onSearchValueChange}/>
        <button>{SEARCH_BUTTON}</button>
        <SearchType/>
      </div>
    );
  };
}
export default Search;
