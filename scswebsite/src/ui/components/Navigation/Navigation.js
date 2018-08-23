import Button from '@material-ui/core/Button';
import MenuPanel from './MenuPanel';
import NavList from './NavList';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import scsmenu from '../../images/scsmenu.png';

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
        <MenuPanel/>
      </div>
    );

    return (
      <div>
        <div className="mobile">
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
        <div className="desktop">
        <NavList/>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Navigation;