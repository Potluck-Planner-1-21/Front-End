import React from "react";
import '../'

const CreateEvent = () => {
    return (
        <div>
            <h1>Create A New Event!</h1>
            <form>
           <label>Time</label>
           <input type='text' />
           <label>Date</label>
           <input type='text' />
           <label>Location</label>
           <input type='text' />
           </form>
           <button>Create Event</button>
        </div>
    )
}

export default CreateEvent;