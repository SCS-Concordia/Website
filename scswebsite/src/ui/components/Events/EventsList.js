import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export default class EventsList extends Component {
    render(){
        return(
          <div className={"grid-root"}>
              <Grid container spacing={8}>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to={"/Tutorials"}>
                        <div>
                            <Typography  gutterBottom variant="headline" component="h2">
                                Tutorials
                            </Typography>
                            <img src={""} width="250"/>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to ={"/AlgoTime"}>
                        <div>
                            <Typography gutterBottom variant="headline" component="h2">
                                AlgoTime
                            </Typography>
                            <img src={""} width="250"/>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to = {"/Competitions"}>
                        <div>
                            <Typography gutterBottom variant="headline" component="h2">
                                Competitions
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
