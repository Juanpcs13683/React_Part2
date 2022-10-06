import React, { useEffect, useState } from "react"
import axios from 'axios'
import Note from "./components/Note"
import noteService from './services/notes'


const App = () => {


  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note ...')
  const [showAll, setShowAll] = useState(true)

  //------------------------------------
  // Get all notes
  useEffect(() => {
   noteService.getAll()
    .then(intialNotes => {
      console.log('get fulfilled')
      setNotes(intialNotes)
    })
},[])

// ---------------------------------------
  const toggleImportanceOf = id => {
    //this is for change the importance of the note
   // const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id) //let us find in the array the note with the same id
    const changedNote = { ...note, important: !note.important }
    


    //In this part we update the imporance of the note
    noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      alert(`the note '${note.content}' was already deleted from the server`)
      setNotes(notes.filter(n => n.id !== id)) //modificamos el array notas con las notas que contengan un id difetente al id
                                              //que se esta intentando actualizar // nota eliminada gets filtered out from the state
    })
  }

//------------------------------------
// this is for add a new note
  const addNote = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
      //id: notes.length + 1,
    }

    //setNotes(notes.concat(noteObject))
    //setNewNote('')
    //in this space we use the axios post metod to send the information
    // to the server and store in a new object that containts its info
    noteService.create(noteObject)
    .then(returnedNote => {
      console.log('respuesta del post',returnedNote)
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  //to show important items
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)





  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={()=> toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">save</button>
      </form>
    </div>
  )


}

export default App

