import Button from '@material-ui/core/Button';
import { Menu } from './tileData';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import scsmenu from '../../images/scsmenu.png';
import { withStyles } from '@material-ui/core/styles';

import styles from './Navigation.css';

class Navigation extends React.Component {
  state = {
    top: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const fullList = (
      <div className='fullList'>
        {Menu}
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('top', true)} style={{float: 'right'}}>
            <img src={scsmenu} alt="" style={{height: 15}}/>
        </Button>
         <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer('top', false)}
          onOpen={this.toggleDrawer('top', true)}
          style={{opacity: 0.8}}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);