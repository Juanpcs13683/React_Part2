import React from "react";
import Header from "./Header";
import Part from "./Part";

const Course = ({course}) =>{
    console.log()
    
    return(
        <div>
            <Header text={course.name} />
            {course.parts.map( part =>
            <Part key={part.id} text={part.name}  value={part.exercises} />
            ) }
        </div>
    )
}

export default Course