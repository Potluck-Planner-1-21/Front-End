// import React, { useState } from 'react';
// import axios from 'axios';


// const CreateEvent = () => {
    
//     const initialState = {
//         name : "",
//         date : "",
//         time : "",
//         location : "",
//         organizer_id : 5

//     }
    

//     const [eventDetails, setEventDetails] = useState(initialState);

//     const handleChange = (e) => {
//         console.log(e.target.name, e.target.value)
//         setEventDetails({
//             ...eventDetails, 
//              [e.target.name] : e.target.value
//         })
//     }

    

//     const handleSubmit = (e) => {
//         e.preventDefault();
//        axios.post("https://potluck-planner-1-21.herokuapp.com/events", eventDetails)
//        .then(res => console.log(res))
//        .catch(err => console.log(err))

//     }



//     return (
//     <div>
//     <form onSubmit={handleSubmit}>
    
//       <h1>Create your event</h1>
//       <input 
//       type="name"
//       name= "name"
//       id="name"
//       value= {eventDetails.email}
//       onChange={handleChange}
//       placeholder= "name"
//       />
      
//       <input 
//       type="date"
//       name= "date"
//       id="date"
//       value= {eventDetails.date}
//       onChange={handleChange}
//       placeholder= "Date"
//       />

//       <input 
//       type="time"
//       name= "time"
//       id="time"
//       value= {eventDetails.time}
//       onChange={handleChange}
//       placeholder= "Time"
//       />
//       <input 
//       type="text"
//       name= "location"
//       id="location"
//       value= {eventDetails.location}
//       onChange={handleChange}
//       placeholder= "Type Location"
//       />
      
//       <button>Submit</button>
//     </form>
//     </div>

//     )
// }

// export default CreateEvent;









// With google api


import React, { useState } from 'react';
import axios from 'axios';
import PlacesAutocomplete from 'react-places-autocomplete';

const CreateEvent = () => {
    
    const initialState = {
        name : "",
        date : "",
        time : "",
        location : "",
        organizer_id : null
        
    }
    const [address, setAddress] = useState("");
    

    const [eventDetails, setEventDetails] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setEventDetails({
            ...eventDetails, 
             [e.target.name] : e.target.value
        })
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
       axios.post("https://potluck-planner-1-21.herokuapp.com/events", eventDetails)
       .then(res => { 
           console.log(res)
           setEventDetails(res.data)
           setAddress(address);
       })
       .catch(err => console.log(err))

    }

    // const handleSelect = async value => {};

    return (
    <div>
    <form onSubmit={handleSubmit}>
    
      <h1>Create your event</h1>
      <input 
      type="name"
      name= "name"
      id="name"
      value= {eventDetails.email}
      onChange={handleChange}
      placeholder= "name"
      />
      
      <input 
      type="date"
      name= "date"
      id="date"
      value= {eventDetails.date}
      onChange={handleChange}
      placeholder= "Date"
      />

      <input 
      type="time"
      name= "time"
      id="time"
      value= {eventDetails.time}
      onChange={handleChange}
      placeholder= "Time"
      />
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        // onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>

            <input {...getInputProps({ placeholder: "Type address" })} />
      <div>
        {loading ? <div>...loading</div> : null }
         {suggestions.map(suggestion => {
             const style = {
                 backgroundColor: suggestion.active ? "#bbded6" : "#fff"
             };
            return (
            <div {...getSuggestionItemProps(suggestion, { style })}>
                {suggestion.description}
            </div>)
         })}
      </div>

      </div>
      
       )}
     
      </PlacesAutocomplete>
      
      <button>Submit</button>
    </form>
    </div>

    )
}

export default CreateEvent;

