import './App.css';

import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import AlgoTime from './ui/components/Events/AlgoTime';
import ClothingSale from './ui/components/Events/CothingSale';
import Competitions from './ui/components/Events/Competitions';
import EventsHome from './ui/pages/Events/EventsHome';
import FAQ from './ui/pages/FAQ/FAQ';
import Footer from './ui/components/Footer/Footer';
import GetInvolved from './ui/pages/GetInvolved/GetInvolved';
import Hackathon from './ui/components/Events/Hackathon';
import Header from './ui/components/Header/Header';
import Home from './ui/pages/Home/Home';
import LizardLounge from './ui/components/Events/LizardLounge';
import MilkCookies from './ui/components/Events/MilkCookies';
import PastExecs from './ui/pages/SCSTeam/PastExecs';
import SCSTeam from './ui/pages/SCSTeam/SCSTeam';
import SpiceUpYourLife from './ui/components/Events/SpiceUpYourLife';
import Sponsors from './ui/pages/Sponsors/Sponsors';
import Tutorials from './ui/components/Events/Tutorials';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div className="mainContent">
                        <Header {...this.props}/>
                        <Route exact name="Home" path="/" component={Home}/>
                        <Route name="Events" path="/Events" component={EventsHome}/>
                        <Route name="Team" path="/SCSTeam" component={SCSTeam}/>
                        <Route name="GetInvolved" path="/GetInvolved" component={GetInvolved}/>
                        <Route name="FAQ" path="/FAQ" component={FAQ}/>
                        <Route name="Sponsors" path="/sponsors" component={Sponsors}/>
                        <Route name="Tutorials" path="/Tutorials" component={Tutorials}/>
                        <Route name="Competitions" path="/Competitions" component={Competitions}/>
                        <Route name="AlgoTime" path="/AlgoTime" component={AlgoTime}/>
                        <Route name="ClothingSale" path="/ClothingSale" component={ClothingSale}/>
                        <Route name="LizardLounge" path="/LizardLounge" component={LizardLounge}/>
                        <Route name="PastExecs" path="/PastExecs" component={PastExecs}/>
                        <Route name="MilkCookies" path="/Milk&Cookies" component={MilkCookies}/>
                        <Route name="SpiceUpYourLife" path="/SpiceUpYourLife" component={SpiceUpYourLife}/>
                        <Route name="Hackathon" path="/Hackathon" component={Hackathon}/>
                    </div>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
