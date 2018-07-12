import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import Header from './ui/components/Header/Header';
import Footer from './ui/components/Footer/Footer';
import Home from './ui/pages/Home/Home';
import EventsHome from './ui/pages/Events/EventsHome';
import FAQ from './ui/pages/FAQ/FAQ';
import GetInvolved from './ui/pages/GetInvolved/GetInvolved';
import SCSTeam from './ui/pages/SCSTeam/SCSTeam';

import './App.css';
import Sponsors from './ui/pages/Sponsors/Sponsors';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Header />
        <Grid>
          <Switch>
            <Route exact name="Home" path="/" component={Home} />
            <Route name="Events" path="/Events" component={EventsHome} />
            <Route name="Team" path="/SCSTeam" component={SCSTeam} />
            <Route name="GetInvolved" path="/GetInvolved" component={GetInvolved} />
            <Route name="FAQ" path="/FAQ" component={FAQ} />
            <Route name="Sponsors" path="/sponsors" component={Sponsors} />
          </Switch>
        </Grid>
        <Footer/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
