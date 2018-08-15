import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import scsconcordia from '../../images/scsconcordia.png';
import styles from './Header.css';
import { withStyles } from '@material-ui/core/styles';

function Header(props) {
    const { classes } = props;

    return (

        <div>
            <div>
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