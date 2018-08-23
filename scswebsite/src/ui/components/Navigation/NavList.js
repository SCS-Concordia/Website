import React, { Component } from 'react';

import {Link} from 'react-router-dom';

export default class NavList extends Component {
    
    render() {
    return (
      <div>
        <Link to="/events" id="events" className="nav-list">Events</Link>
        <Link to="/GetInvolved" id="involved" className="nav-list">Get Involved</Link>
        <Link to="/faq" className="nav-list">FAQ</Link>
        <Link to="/sponsors" className="nav-list">Sponsors</Link>
      </div>
    )
  }
}
