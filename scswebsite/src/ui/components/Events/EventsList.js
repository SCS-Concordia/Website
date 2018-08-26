import {Col, Grid, Row} from 'react-flexbox-grid';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      maxWidth: 345,
      margin: 'auto',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    container: {
      margin: 'auto',
    },
    item: {
        paddingTop: '1em',
    },
  };
  

  function SimpleMediaCard(props) {
    const { classes } = props;
        return(
         <div>
             <Grid>
                 <Row>
                     <Col xs={12} sm={6}>
                        <Link to={"/Tutorials"}>
                            <div className="event-col">
                                <img src="image/events/tutorial.png" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                     <Col xs={12} sm={6}>
                        <Link to={"/Competitions"}>
                            <div className="event-col">
                                <img src="image/events/competition.png" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                 </Row>
                 <Row>
                     <Col xs={12} sm={6}>
                        <Link to={"/AlgoTime"}>
                            <div className="event-col">
                               <img src="image/events/algotime.png" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                     <Col xs={12} sm={6}>
                     <Link to={"/ClothingSale"}>
                            <div className="event-col">
                                <img src="image/events/clothingSale.png" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                 </Row>
                 <Row>
                     <Col xs={12} sm={6}>
                        <Link to={"/LizardLounge"}>
                            <div className="event-col">
                                <h2>Lizard Lounge</h2>
                                <img src="image/events/lizardLounge.png" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                     <Col xs={12} sm={6}>
                        <Link to={"/Milk&Cookies"}>
                            <div className="event-col">
                                <h2>Milk & Cookies</h2>
                                <img src="image/events/milkCookie.png" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                     <Col xs={12} sm={6}>
                        <Link to={"/SpiceUpYourLife"}>
                            <div className="event-col">
                                <h2>Spice Up Your Life</h2>
                                <img src="image/events/spiceUpYourLife.png" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                     <Col xs={12} sm={6}>
                        <Link to={"/Hackathon"}>
                            <div className="event-col">
                                <h2>Hackathon</h2>
                                <img src="image/events/hackathon.png" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                 </Row>
             </Grid>
         </div>
        );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleMediaCard);