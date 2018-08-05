import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
          <div className={"grid-root"}>
              <Grid container>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to={"/Tutorials"}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Tutorials
                                </Typography>

                                <Typography component="p">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to = {"/Competitions"}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Competitions
                            </Typography>
                                <Typography component="p">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to ={"/AlgoTime"}>
                        <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        AlgoTime
                                </Typography>
                                    <Typography component="p">
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to = {"/ClothingSale"}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Clothing Sale
                            </Typography>
                                <Typography component="p">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} padding={"2vh"}>
                    <Link to = {"/LizardLounge"}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Lizard Lounge
                            </Typography>
                                <Typography component="p">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
              </Grid>
          </div>
        );
    
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleMediaCard);