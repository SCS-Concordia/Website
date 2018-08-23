import './Main.css';

import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>Hello World<span className="blink"> _</span></h1>
        <p>The Software Engineering And Computer Science Society (SCS) is an undergraduate student society under the <a href="https://ecaconcordia.ca/">Engineering and Computer Science Association (ECA)</a>, at <a href="http://www.concordia.ca/">Concordia University</a>.</p>
      </div>
    );
  }
}
