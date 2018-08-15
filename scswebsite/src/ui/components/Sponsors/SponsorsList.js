import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default class SponsorsList extends Component {
    render(){
        return(
          <div className={"grid-root"}>
              <h1>Our Sponsors</h1>
              <p>
                  SCS is able to provide all kinds of events to enrich the student life
                  at Concordia thanks to all of our sponsors!
                  If you are interested in a sponsorship opportunity with us, please contact finance.scs@ecaconcordia.ca.
              </p>
              <Grid container spacing={8}>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to={"/"}>
                        <div>
                            <Typography gutterBottom variant="headline" component="h2">
                              Scigilian
                            </Typography>
                            <img src={""} alt="" width="250"/>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to ={"/"}>
                        <div>
                            <Typography gutterBottom variant="headline" component="h2">
                                ECA Concordia
                            </Typography>
                            <img src={""} alt="" width="250"/>
                        </div>
                    </Link>
                </Grid>
              </Grid>
          </div>
        );
    }
}
