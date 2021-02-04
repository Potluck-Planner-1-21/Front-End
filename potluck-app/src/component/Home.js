import React from "react";

const Home = (props) => {
    return (
        <div>
           <h1>I'm an empty page</h1>
           <button onClick={()=> { props.history.push("/users")}}>Click</button>
        </div>
    )
}

export default Home;