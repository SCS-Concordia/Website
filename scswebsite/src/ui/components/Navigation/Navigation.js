import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex', 
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
    popperClose: {
        pointerEvents: 'none',
    },
});

class MenuListComposition extends React.Component {
    state = {
        open: false,
    };

    handleEnter = () => {
        this.setState({ open: true });
    };

    handleLeave = () => {
        this.setState({ open: false });
    };

    handleClose = event => {
        if (this.target1.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <Manager>
                    <Target>
                        <div ref={node => {this.target1 = node;}}>
                           
                            <Link to={"/Events"} className={classes.linkNav} onClick={this.handleClose}>
                                Events
                            </Link>
                     
                            <Button
                                aria-owns={open ? 'menu-list-grow' : null}
                                aria-haspopup="true"
                                onMouseEnter={this.handleEnter}
                                onMouseLeave={this.handleLeave}
                            >
                                <Link to={"/SCSTeam"} className={classes.linkNav} onClick={this.handleClose}>
                                    SCS Team
                                </Link>
                            </Button>
                            <Link to={"/GetInvolved"} className={classes.linkNav}>Get Involved</Link>
                            <Link to={"/FAQ"} className={classes.linkNav}>FAQ</Link>
                            <Link to={"/sponsors"} className={classes.linkNav}>Sponsors</Link>

                        </div>
                    </Target>
                    <Popper
                        placement="bottom-start"
                        eventsEnabled={open}
                        className={classNames({ [classes.popperClose]: !open })}
                    >
                        <ClickAwayListener onClickAway={this.handleClose}>
                            <Grow in={open} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                                <Paper>
                                    <MenuList role="menu" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
                                        <Link to={"/CurrentExecs"}><MenuItem onClick={this.handleClose}>Current Executives</MenuItem></Link>
                                        <Link to ={"/PastExecs"}><MenuItem onClick={this.handleClose}>Past Executives</MenuItem></Link>
                                        <Link to={"/ContactUs"}><MenuItem onClick={this.handleClose}>Contact Us</MenuItem></Link>
                                        
                                   </MenuList>
                                </Paper>
                            </Grow>
                        </ClickAwayListener>
                    </Popper>
                </Manager>
            </div>
        );
    }
}

MenuListComposition.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);