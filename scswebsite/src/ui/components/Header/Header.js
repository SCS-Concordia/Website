import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navigation from '../Navigation/Navigation';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    flex: {
        flex: 1,
    },
});

function Header(props) {
    const { classes } = props;

    return (
        <div className={"nav"}>
            <div className={classes.root}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        <Link to={"/"}><img src={""} height={"20vh"} width={"20vh"}/>SCS Concordia</Link>
                    </Typography>
                    <div>
                        <Navigation  />
                    </div>
                </Toolbar>
            </div>
        </div>
    );
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Header);