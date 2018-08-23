import { Link } from "react-router-dom";
import NavList from "../Navigation/NavList";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Header.css";
import { withStyles } from "@material-ui/core/styles";

function Header(props) {
  const { classes } = props;

  return (
    <div>
      <div className="notTop">
        <div>
          <Link to="/">
            <img src="image/favicon.ico" height="30em" />
          </Link>
          <div style={{ float: "right" }}>
            <Navigation {...props} />
          </div>
        </div>
      </div>
      <div className="isTop">
        <Link to="/">
          <img src="image/favicon.ico" height="80em" className="centerImg" />
        </Link>
        
        <NavList {...props} />
      </div>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
1;
