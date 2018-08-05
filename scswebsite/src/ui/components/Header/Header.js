import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import scsconcordia from '../../images/scsconcordia.png';
import { withStyles } from '@material-ui/core/styles';

import styles from './Header.css';

function Header(props) {
    const { classes } = props;

    return (
        <div className="navbar">
            <div className={classes.root}>
                <Toolbar style={{width: '100%'}}>
                    <Link to="/"> <img src={scsconcordia} alt="" height={30}/></Link>
                    <div className="right">
                        <Navigation />
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