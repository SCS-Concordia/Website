import { Link } from 'react-router-dom';
import React from 'react';

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
