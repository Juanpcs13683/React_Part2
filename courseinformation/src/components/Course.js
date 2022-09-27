import React from "react";
import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const Course = ({course}) =>{
    console.log()
const total = course.parts.reduce((previous, current) => previous + current.exercises, 0)
    
    return(
        <div>
            <Header text={course.name} />
            {course.parts.map( part =>
            <Part key={part.id} text={part.name}  value={part.exercises} />) }
            <Total text="total of" value={total} text2="exercises"/>
        </div>
    )
}

export default Course