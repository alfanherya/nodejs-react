import React from "react";
import TypeWriter from "typewriter-effect";


function Type(){
    return(
         <TypeWriter options={{strings: [
            "Developers",
            "Software Engineers",
            "Java Spring Boot Engineer",
            "React js"
         ],
        autoStart: true,
        loop: true,
        deleteSpeed:100}}/>
    );
}

export default Type;