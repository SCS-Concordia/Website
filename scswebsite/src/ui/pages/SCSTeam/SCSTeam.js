import React, { Component } from 'react'

import CurrentExecs from '../../components/SCSTeam/CurrentExecs';
import SCSTeamInfo from '../../components/SCSTeam/SCSTeamIntro';

export default class SCSTeam extends Component {
  render() {
    return (
      <div className="container">
        <SCSTeamInfo/>
        <CurrentExecs/>
      </div>
    )
  }
}
