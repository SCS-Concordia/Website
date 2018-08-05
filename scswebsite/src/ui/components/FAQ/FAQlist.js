import React, {Component} from 'react'

export default class FAQList extends Component {

    render() {
        return (
            <div>
                <h1>FAQ</h1>

                <h2>What can SCS do for me?</h2>
                <div className="listIndent">
                    <h3>Help you learn new skills.</h3>
                    <p>
                        Through our tutorials, you’ll encounter tools and programming languages that you may never see
                        in your classes, such as Git, Android and Python. These skills will help you tremendously when
                        working on projects and looking for a job.
                    </p>

                    <h3>Give you extra programming practice.</h3>
                    <p>
                        Aside from a few small assignments and projects, your classes won’t give you very much practical
                        experience. During our weekly Algorithm Time event, you can challenge yourself with fun coding
                        problems, some of which can potentially be given to you in a real job interview. You can also
                        participate in awesome programming competitions like CS Games and IEEEXtreme, which are not only
                        tons of fun but give you excellent coding practice.
                    </p>

                    <h3>Help you in your job hunt.</h3>
                    <p>
                        Networking is extremely important when it comes to your future career. We host events like guest
                        speakers and company tours, which will give you the opportunity to meet with representatives of
                        different companies and build your network.
                    </p>

                    <h3>Help you make new friends and have fun!</h3>
                    <p>
                        We host a number of social events throughout the year, such as Lizard Lounge, Milk & Cookies,
                        and Wine & Cheese. You’ll meet tons of really cool people and make your experience as a
                        Concordia student worthwhile.
                    </p>
                </div>

                <h2>Do I need to be in COMP, SOEN or COEN to participate?</h2>
                <p>
                    Nope, students from other programs and faculties are welcome to attend our events.
                </p>

                <h2>How/Where can I order hoodie or a sweater?</h2>
                <p>
                    We usually have a sale at the beginning of the Fall semester and another one at the beginning of
                    the Winter semester. \n
                    You can try out the different sizes at our booth during the sale period and pay at the ECA
                    office on the 8th floor.
                </p>

                <h2>How long does it take to receive my clothing order??</h2>
                <p>
                    Since each order is custom made, it takes around 3-4 weeks to receive the order after the end of
                    the sale period.
                </p>

                <h2>Can I get a refund/exchange?</h2>
                <p>
                    Unfortunately, since it is custom made per order form we cannot do any exchanges or returns
                </p>

                <h2>How do I subscribe to the mailing list and what emails will I receive?</h2>
                <p>
                    The form to subscribe to the mailing list is on this page. By subscribing to it, you’ll receive
                    our weekly SCS newsletter, where we let you know about our upcoming events and any other
                    announcements. You can unsubscribe at any time!
                </p>

                <h2>How can I become an executive on SCS?</h2>
                <p>
                    We hold elections for our executive positions every year around April.
                </p>
            </div>
        );
    }
}
