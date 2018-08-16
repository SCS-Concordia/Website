import './Navigation.css';

import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class SideList extends Component {
  render() {
    return (
        <div>
            <Link to="/events" className="nav-item">Events</Link> 
            <br/>
            <Link to="/Tutorials" className="nav-list-item">Tutorials</Link>
            <Link to="/Competitions" className="nav-list-item">Competitions</Link>
            <Link to="/AlgoTime" className="nav-list-item">AlgoTime</Link>
            <Link to="/ClothingSale" className="nav-list-item">Clothing Sale</Link>
            <Link to="/LizardLounge" className="nav-list-item">Lizard Lounge</Link>
            <Link to="/Milk&Cookies" className="nav-list-item">Milk & Cookies</Link>
            <br/>
            <Link to="/GetInvolved" className="nav-item">Get Involved</Link> 
            <br/>
            <Link to="/SCSTeam" className="nav-list-item">Current Team</Link>
            <Link to="/PastExecs" className="nav-list-item">Past Execs</Link>
            <br/>
            <Link to="/faq" className="nav-item">FAQ</Link>
            <br/><br/>
            <Link to="/sponsors" className="nav-item">Sponsors</Link>
      
      </div>
    )
  }
}
