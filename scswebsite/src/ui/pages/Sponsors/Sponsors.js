import React, { Component } from 'react';
import Note from '../../components/Sponsors/Note';
import SponsorsList from '../../components/Sponsors/SponsorsList';

export default class Sponsors extends Component {
  render() {
    return (
      <div>
        <Note />
        <SponsorsList />
      </div>
    )
  }
}
