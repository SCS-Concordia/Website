import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default class SponsorsList extends Component {
    render(){
        return(
          <div className={"grid-root"}>
              <h1>Our Sponsors</h1>
              <Grid container spacing={8}>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to={"/"}>
                        <div>
                            <Typography gutterBottom variant="headline" component="h2">
                              Scigilian
                            </Typography>
                            <img src={""} width="250"/>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to ={"/"}>
                        <div>
                            <Typography gutterBottom variant="headline" component="h2">
                                ECA Concordia
                            </Typography>
                            <img src={""} width="250"/>
                        </div>
                    </Link>
                </Grid>
              </Grid>
          </div>
        );
    }
}
