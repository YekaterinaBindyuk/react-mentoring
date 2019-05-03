import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "./Button";
class BackButton extends React.Component {
  goBack = () => {
    console.log("goBack button clicked");
  };

  render = () => {
    return (
      <Link href="/index">
        <Button color={'violet'}
          id="back-btn"
          onClick={this.goBack}
          className="btn mb-3 btn-sm"
        >
          <FontAwesomeIcon icon="long-arrow-alt-left" className="mr-1" />
        </Button>
      </Link>
    );
  };
}
export default BackButton;
