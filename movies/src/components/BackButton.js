import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class BackButton extends React.Component {
  goBack = () => {
    console.log('goBack button clicked');
  };

  render = () => {
    return (
       <Link to="/"><button id="back-btn" onClick={this.goBack} className="btn btn-dark mb-3 btn-sm">
        <FontAwesomeIcon icon="long-arrow-alt-left" className="mr-1" />
      </button>
      </Link>
    );
  };
}
export default BackButton;
