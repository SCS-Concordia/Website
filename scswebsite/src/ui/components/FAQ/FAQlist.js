import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

export default class FAQList extends Component {
  render() {
    return (
      <div>
        <h1>FAQ</h1>
        <h2>What can SCS do for me?</h2>
        <Typography>
        </Typography>
        <h2>Do I need to be in COMP, SOEN or COEN to participate?</h2>
        <Typography>
        Nope, students from other programs and faculties are welcome to attend our events.
        </Typography>
        <h2>How do I subscribe to the mailing list and what emails will I receive?</h2>
        <Typography>
        The form to subscribe to the mailing list is on this page. By subscribing to it, you’ll receive our weekly SCS newsletter, where we let you know about our upcoming events and any other announcements. You can unsubscribe at any time, not that you’ll want to 😉
        </Typography>
        <h2>How can I become an executive on SCS?</h2>
        <Typography>
        We hold elections for our executive positions every year around April.
        </Typography>
      </div>
    );
  }
}
