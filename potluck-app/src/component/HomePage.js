import React from 'react'
import { Link } from 'react-router-dom';




function HomePage() {

    return (
    <div>
        <h1>Home Page</h1>
        <h2>
            
                <Link to='/create-your-event' >Create New Event</Link>
                <Link to='/ongoing-events' >Ongoing Events</Link>
                <Link to='/event-gallery' >Event Gallery</Link>
                <Link to='/users' >User participation</Link>
                
            
        </h2>

            
    </div>
    )
}

export default HomePage;