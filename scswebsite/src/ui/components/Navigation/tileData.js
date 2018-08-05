import { Link } from 'react-router-dom';
import React from 'react';

import './Navigation.css';

export const Menu = (
  <div>
        <Link to="/events" className="options">Events</Link>
        <Link to="/SCSTeam" className="options">SCS Team</Link>
        <Link to="/faq" className="options">FAQ</Link>
        <Link to="/sponsors" className="options">Sponsors</Link>
  
  </div>
);
