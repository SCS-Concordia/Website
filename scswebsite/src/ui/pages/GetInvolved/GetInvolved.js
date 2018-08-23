import React, { Component } from "react";

import GetInvolvedIntro from "../../components/GetInvolved/GetInvolvedIntro";
import { Link } from "react-router-dom";

export default class GetInvolved extends Component {
  render() {
    return (
      <div className="container">
        <GetInvolvedIntro />
        <p>
          {" "}
          Want to get involved with the Software Engineering and Computer
          Science Society at Concordia? Follow us to find out more about our
          activities including programming tutorials, guest speakers,
          competitions, hackathons, parties and more!
          <br />
          <br />
          <Link to="/SCSTeam">Current Executives</Link>
          <br />
          <Link to="/pastexecs">Past Executives</Link>
        </p>
      </div>
    );
  }
}
