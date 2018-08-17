import './Execs.css';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    padding: "1em",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class PastExecsComponent extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2017 - 2018
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span className="role">President: </span>Tobi Décary-Larocque <br/>
              <span className="role">VP Academic: </span>Erin Benderoff <br/>
              <span className="role">VP Communications: </span>Samantha Kerr <br/>
              <span className="role">VP Competitions: </span>Arielle Evans & Lance Lafontaine <br/>
              <span className="role">VP Finance: </span>Christina Nguyen <br/>
              <span className="role">VP Internal: </span>Adam Galati <br/>
              <span className="role">VP Projects: </span>Alex Frappier Lachapelle <br/>
              <span className="role">VP Social: </span>Darrin Fong <br/>
              <span className="role">Director Academic: </span>Sharon Ho <br/>
              <span className="role">Director Communications: </span>Karen Bie & Yun Shi Lin <br/>
              <span className="role">Director Competitions: </span>Jacob Gagné & Lori Dalkin <br/>
              <span className="role">Director Social: </span>Frankie Valela & Avery Singh <br/>
              <span className="role">Director Finance: </span>Joshua Butler <br/>
              <span className="role">Director Projects: </span>Brendan McGarry <br/>
              <span className="role">First-Year Rep for CS: </span>Charles-Antoine Guité <br/>
              <span className="role">First-Year Rep for SOEN: </span>Leena Nguyen <br/>
              <span className="role">First-Year Rep for COEN: </span>Michael Oiknine <br/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2016 - 2017
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span className="role">President: </span>Nicole Cappadocia-Assaly <br/>
              <span className="role">VP Academic: </span>Thinesh Thuraisingam<br/>
              <span className="role">VP Communications: </span>Erin Benderoff<br/>
              <span className="role">VP Competitions: </span>Javier E. Fajardo <br/>
              <span className="role">VP Finance: </span>Brendan McGarry <br/>
              <span className="role">VP Internal: </span>Tobi Décary-Larocque <br/>
              <span className="role">VP Projects: </span>Jacob Gagné <br/>
              <span className="role">VP Social: </span>Frankie Valela<br/>
              <span className="role">Director Academic: </span>Nicholas Sabelli <br/>
              <span className="role">Director Communications: </span>Samantha Kerr & Lori Dalkin<br/>
              <span className="role">Director CS Games: </span>Bryce Drewery Schoeler<br/>
              <span className="role">Director Competitions: </span>Alexis Grondin <br/>
              <span className="role">Director Social: </span>Gen Brisebois <br/>
              <span className="role">Director Sponsorship: </span>Adam Galati <br/>
              <span className="role">Director Projects: </span>Arielle Evans <br/>
              <span className="role">Director Tutorials: </span>Vineet Koppalkar <br/>
              <span className="role">First-Year Rep for CS: </span>Andres Hernandez <br/>
              <span className="role">First-Year Rep for SOEN: </span>Ribal Aladeeb <br/>
              <span className="role">Chair Emeritus: </span>Natacha Gabbamonte <br/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2015 - 2016
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span className="role">President: </span>Natacha Gabbamonte <br/>
              <span className="role">VP Academic: </span>Nicole Cappadocia-Assaly<br/>
              <span className="role">VP Communications: </span>Alex Dussault<br/>
              <span className="role">VP Competitions: </span>Amine Mhedbi <br/>
              <span className="role">VP Finance: </span>Mohamed Abdelbaky<br/>
              <span className="role">VP Internal: </span>Javier E. Fajardo <br/>
              <span className="role">VP Projects: </span>Elias Haroun <br/>
              <span className="role">VP Social: </span>Reza Madabadi<br/>
              <span className="role">Director Academic: </span>Thinesh Thuraisingam <br/>
              <span className="role">Director Communications: </span>Gen Brisebois<br/>
              <span className="role">Director Marketing: </span>Syrine Krim<br/>
              <span className="role">Director Projects: </span>Amir Bawab <br/>
           </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2014 - 2015
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            <span className="role">President: </span>Geneviève Chafouleas<br/>
              <span className="role">VP Academic: </span>Natacha Gabbamonte <br/>
              <span className="role">VP Communications: </span>Alex Dussault <br/>
              <span className="role">VP Competitions: </span>Dave Gurnsey <br/>
              <span className="role">VP Finance: </span>Amine Mhedhbi<br/>
              <span className="role">VP Internal: </span>Javier E. Fajardo <br/>
              <span className="role">VP Projects: </span>Gabriel Gheorghian <br/>
              <span className="role">VP Social: </span>Patrick Nguyen <br/>
             </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel5"}
          onChange={this.handleChange("panel5")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2013 - 2014
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span className="role">President: </span>Josh Whatley <br/>
              <span className="role">VP Academic: </span>Sam Assaf <br/>
              <span className="role">VP Communications: </span>Sophia Thomas <br/>
              <span className="role">VP Competitions: </span>Geneviève Chafouleas<br/>
              <span className="role">VP Finance: </span>Rami Kuret <br/>
              <span className="role">VP Internal: </span>Anas Ambri <br/>
              <span className="role">VP Projects: </span>Amine Mhedhbi<br/>
              <span className="role">VP Social: </span>Patrick Nguyen<br/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel6"}
          onChange={this.handleChange("panel6")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2012 - 2013
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span className="role">President: </span>Yoni Levi<br/>
              <span className="role">VP Academic: </span>Ramez Dabbas <br/>
              <span className="role">VP Communications: </span> Amine Mhedbi <br/>
              <span className="role">VP Competitions: </span>Josh Whatley <br/>
              <span className="role">VP Finance: </span>Tomas Valettini <br/>
              <span className="role">VP Marketing: </span>Rami Kuret <br/>
              <span className="role">VP Projects: </span>Anas Ambri <br/>
              <span className="role">VP Social: </span>Deven Collette <br/>
             </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel7"}
          onChange={this.handleChange("panel7")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2011 - 2012
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span className="role">President: </span>Sydney Swaine-Simon <br/>
              <span className="role">VP Academic: </span>Siddartha Kattohu <br/>
              <span className="role">VP Communications: </span>Yoni Levi <br/>
              <span className="role">VP Competitions: </span>Josh Whatley <br/>
              <span className="role">VP Finance: </span> Anas Ambri <br/>
              <span className="role">VP Marketing: </span>Sophia Thomas <br/>
              <span className="role">VP Projects: </span>Sagar Patel <br/>
              <span className="role">VP Social: </span>Daniel Ricci<br/>
         </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel8"}
          onChange={this.handleChange("panel8")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2010 - 2011
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <span className="role">President: </span>Alexi Ionesu <br/>
              <span className="role">VP Academic: </span>Sydney Swaine-Simon <br/>
              <span className="role">VP Communications: </span>Yoni Levi <br/>
              <span className="role">VP Finance: </span>Mathieu Dumas Savard<br/>
              <span className="role">VP Marketing: </span>Sophia Thomas <br/>
              <span className="role">VP Social: </span>Siddartha Kattohu <br/>
               </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel9"}
          onChange={this.handleChange("panel9")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2009 - 2010
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            <span className="role">President: </span>Kyle Sama <br/>
              <span className="role">VP Academic: </span>Henk Boom <br/>
              <span className="role">VP Finance: </span>Matt Gallant <br/>
              <span className="role">VP Marketing: </span>Sandy Woo <br/>
              <span className="role">VP Social: </span>Yoni Levi <br/>
     </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel10"}
          onChange={this.handleChange("panel10")}
        >
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>
              Year 2008 - 2009
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            <span className="role">Founder: </span>Erik Miller <br/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

PastExecsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PastExecsComponent);
