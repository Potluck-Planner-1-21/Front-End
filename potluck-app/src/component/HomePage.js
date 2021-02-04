import React from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import OngoingEvents from './OngoingEvents';
import EventGallery from './EventGallery';



function HomePage() {

    return (
    <div>
        <h1>Home Page</h1>
            <Router>
                <Link to='/create-event' >Create New Event</Link>
                <Link to='/ongoing-events' >Ongoing Events</Link>
                <Link to='/event-gallery' >Event Gallery</Link>
                <Link to='/user' >User participation</Link>

                <Route exact path={'/create-event'} component={CreateEvent} />
                <Route exact path={'/ongoing-events'} component={OngoingEvents} />
                <Route exact path={'/event-gallery'} component={EventGallery} />
            </Router>

            
    </div>
    )
}

export default HomePage;






/*
function HomePage() {

    return (
    <div>
        <h1>Home Page</h1>
            <Router>
                <Link to='/create-event' >Create New Event</Link>
                <Link to='/ongoing-events' >Ongoing Events</Link>
                <Link to='/event-gallery' >Event Gallery</Link>
                <Link to='/user' >User participation</Link>

                <Route exact path={'/create-event'} component={CreateEvent} />
                <Route exact path={'/ongoing-events'} component={OngoingEvents} />
                <Route exact path={'/event-gallery'} component={EventGallery} />
            </Router>

            
    </div>
    )
}

export default HomePage
*/