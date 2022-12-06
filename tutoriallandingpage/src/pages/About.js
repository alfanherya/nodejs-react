import React from "react";
import { Link } from 'react-router-dom';

function About(){
    return(
        <div>
            <p>This is the About Page</p>
            <Link to="/">Back To Home</Link>
        </div>
    )
}

export default About;