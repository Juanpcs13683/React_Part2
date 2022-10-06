import React from "react";

  //make a button to let us change the importante of the notes --- same as above


const Note = ({note, toggleImportance}) => {
    const label = note.important? note.important=false : note.important=true
    return(
        <li>
        {note.content}
        <button onClick={toggleImportance}>Change</button>
        </li>
    )
}

export default Note