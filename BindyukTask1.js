import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Greeting extends React.Component {
  render() {
    return (
      React.createElement('span', {}, 'Greetings from')
    )
  }
}

class Name extends React.PureComponent {
  render() {
    const {firstName, lastName} = this.props;
    return (
      <span>{firstName} {lastName}</span>
    )
  }
}



function App() {
  return (
    <div>
      <Greeting /> <Name firstName="Katya" lastName="Bindyuk"/>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App/>, rootElement);
