import React, { Component } from "react";

import GetInvolvedIntro from "../../components/GetInvolved/GetInvolvedIntro";
import { Link } from "react-router-dom";

export default class GetInvolved extends Component {
  render() {
    return (
      <div className="container">
        <GetInvolvedIntro />
        <p>
          SCS's purpose is to:
          <ul>
            <li>Organize academic and social events for students </li>
            <li>Organize competitions for students</li>
            <li>
              Helping students learn more about Software Engineering, Computer
              Science and Computer Engineering
            </li>
            <li>
              Help create a link between academic life and the industry Building
              a strong relationship between students and faculty members
            </li>
          </ul><br/>
          Want to get involved with the Software Engineering and Computer
          Science Society at Concordia? Follow us to find out more about our
          activities including programming tutorials, guest speakers,
          competitions, hackathons, parties and more!
          <br />
          <br />
          <Link to="/SCSTeam">Current Executives</Link>
          <br />
          <Link to="/pastexecs">Past Executives</Link>
          For more details about the society, you can refer to our constitution.
        </p>
      </div>
    );
  }
}
