import './Navigation.css';

import { Col, Grid, Row } from 'react-flexbox-grid';

import { Link } from 'react-router-dom';
import React from 'react';

export const Menu = (
  <div>
      <Grid fluid>
        <Row>
            <Col xs={3} sm={3}>
                <Link to="/events" className="nav-item">Events</Link> 
                <br/><br/>
                <Link to="/Tutorials" className="nav-list-item">Tutorials</Link>
                <br/>
                <Link to="/Competitions" className="nav-list-item">Competitions</Link>
                <br/>
                <Link to="/AlgoTime" className="nav-list-item">AlgoTime</Link>
                <br/>
                <Link to="/ClothingSale" className="nav-list-item">Clothing Sale</Link>
                <br/>
                <Link to="/LizardLounge" className="nav-list-item">Lizard Lounge</Link>
                <br/>
                <Link to="/Milk&Cookies" className="nav-list-item">Milk & Cookies</Link>
                
          </Col>
            <Col xs={3} sm={3}>
                <Link to="/GetInvolved" className="nav-item">Get Involved</Link> 
                <br/><br/>
                <Link to="/SCSTeam" className="nav-list-item">Current Team</Link>
                <br/>
                <Link to="/PastExecs" className="nav-list-item">Past Execs</Link>
            </Col>
            <Col xs={3} sm={3}>
                <Link to="/faq" className="nav-item">FAQ</Link>
            </Col>
            <Col xs={3} sm={3}>
                <Link to="/sponsors" className="nav-item">Sponsors</Link>
            </Col>
        </Row>
      </Grid>
  </div>
);
