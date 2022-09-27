import React from "react";
import Header from "./Header";
import Part from "./Part";

const Course = ({course}) =>{
    console.log(course.parts[0])
    
    return(
        <div>
            <Header text={course.name} />
            {course.parts.map( part =>
            <Part key={course.parts.id} text={part.name}  value={part.exercises} />
            ) }
        </div>
    )
}

export default Course