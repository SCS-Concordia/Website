import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Grid } from 'react-bootstrap';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';
import ReportIcon from '@material-ui/icons/Report';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';

const styles = {
    options: {
        padding: '1em',
    }
};

export const Menu = (
  <div>
        <Link to="/events" style={styles.options}>Events</Link> 
        <Link to="/SCSTeam" style={styles.options}>SCS Team</Link> 
        <Link to="/faq" style={styles.options}>FAQ</Link>
        <Link to="/sponsors" style={styles.options}>Sponsors</Link>
  
  </div>
);
