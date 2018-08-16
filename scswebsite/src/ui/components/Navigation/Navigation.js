import Button from '@material-ui/core/Button';
import { Menu } from './tileData';
import PropTypes from 'prop-types';
import React from 'react';
import SideList from './SideList';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import scsmenu from '../../images/scsmenu.png';
import styles from './Navigation.css';
import { withStyles } from '@material-ui/core/styles';

class Navigation extends React.Component {
  state = {
    top: false,
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className="side">
      <SideList/>
      </div>
    );

    const fullList = (
      <div className='fullList'>
        {Menu}
      </div>
    );

    return (
      <div>
        <div className="desktop">
        <Button onClick={this.toggleDrawer('top', true)}>
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
        <div className="mobile">
        <Button onClick={this.toggleDrawer('left', true)}>
            <img src={scsmenu} alt="" style={{height: 15}}/>
        </Button>
         <SwipeableDrawer
          anchor="left"
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
          style={{opacity: 0.8}}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);