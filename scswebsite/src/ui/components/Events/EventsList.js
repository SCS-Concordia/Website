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
                                <h3>Tutorials</h3>
                                <img src="image/grey.jpg" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                     <Col xs={12} sm={6}>
                        <Link to={"/Competitions"}>
                            <div className="event-col">
                                <h3>Competitions</h3>
                                <img src="image/grey.jpg" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                 </Row>
                 <Row>
                     <Col xs={12} sm={6}>
                        <Link to={"/AlgoTime"}>
                            <div className="event-col">
                                <h3>AlgoTime</h3>
                                <img src="image/grey.jpg" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                     <Col xs={12} sm={6}>
                     <Link to={"/ClothingSale"}>
                            <div className="event-col">
                                <h3>Clothing Sale</h3>
                                <img src="image/grey.jpg" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                 </Row>
                 <Row>
                     <Col xs={12} sm={6}>
                        <Link to={"/LizardLounge"}>
                            <div className="event-col">
                                <h3>Lizard Lounge</h3>
                                <img src="image/grey.jpg" className="event-list-img"/>
                            </div>
                        </Link>
                     </Col>
                     <Col xs={12} sm={6}>
                        <Link to={"/Milk&Cookies"}>
                            <div className="event-col">
                                <h3>Milk & Cookies</h3>
                                <img src="image/grey.jpg" className="event-list-img"/>
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