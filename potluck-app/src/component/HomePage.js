import React from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import OngoingEvents from './OngoingEvents';
import EventGallery from './EventGallery';
import Users from './Users';



function HomePage() {

    return (
    <div>
        <h1>Home Page</h1>
        <h3>
            <Router>
                <Link to='/create-event' >Create New Event</Link>
                <Link to='/ongoing-events' >Ongoing Events</Link>
                <Link to='/event-gallery' >Event Gallery</Link>
                <Link to='/users' >User participation</Link>

                <Route exact path={'/create-event'} component={CreateEvent} />
                <Route exact path={'/ongoing-events'} component={OngoingEvents} />
                <Route exact path={'/event-gallery'} component={EventGallery} />
                <Switch>
                <Route exact path={'/users'} component={Users} />
                </Switch>
            </Router>
            </h3>

            
    </div>
    )
}

export default HomePage;