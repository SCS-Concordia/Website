import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import scsconcordia from '../../images/scsconcordia.png';
import { withStyles } from '@material-ui/core/styles';
import styles from './Header.css';

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
    nav: {
        backgroundColor: 'transparent',
    }

});


function Header(props) {
    const { classes } = props;

    return (

        <div className={classes.nav}>
            <div className={classes.root}>
                    <Link to="/"> <img src={scsconcordia} height={30}/></Link>
                    <div style={{float: "right"}}>
                        <Navigation />
                    </div>
            </div>
        </div>
    );
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);