import React, { useEffect, useRef, useState } from "react"
import Note from "./components/Note"
import noteService from './services/notes'
import Notification from "./components/Notification"
import loginService from './services/login'
import LoginForm from "./components/LoginForm"
import Togglable from "./components/Togglable"
import NoteForm from "./components/NoteForm"
import Footer from "./components/Footer"



const App = () => {


  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)


  //------------------------------------
  // Get all notes
  useEffect(() => {
   noteService.getAll()
    .then(intialNotes => {
      console.log('get fulfilled')
      setNotes(intialNotes)
    })
},[])

//verying if the logged in details are avaible
useEffect(() => {
  const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    setUser(user)
    noteService.setToken(user.token)
  }
},[])

//-------------------------------
const handleLogin = async (event) => {
  event.preventDefault()
  try {
    const user = await loginService.login({ username, password, })
    setUser(user)
    noteService.setToken(user.token)
    window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user)) 
    setUsername('')
    setPassword('')
  } catch (exception) {
    setErrorMessage('wrong credentials')
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }
}




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
      setErrorMessage(`the note '${note.content}' was already deleted from the server`)
      setTimeout(()=>{
        setErrorMessage(null)
      },5000)
      setNotes(notes.filter(n => n.id !== id)) //modificamos el array notas con las notas que contengan un id difetente al id
                                              //que se esta intentando actualizar // nota eliminada gets filtered out from the state
    })
  }

//------------------------------------
// this is for add a new note
  const addNote = (noteObject) => {

    noteFormRef.current.toggleVisibility()

    noteService.create(noteObject)
    .then(returnedNote => {
      console.log('respuesta del post',returnedNote)
      setNotes(notes.concat(returnedNote))
    }).catch(error => {
      setErrorMessage(error.response.data.error)
      setTimeout(() => {
        setErrorMessage(null)
      }, 4000);
    })
  }



  //to show important items
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

  const noteFormRef = useRef()

  const noteForm = () => (
    <Togglable buttonLabel="new note" ref={noteFormRef}>
      <NoteForm createNote={addNote} />
    </Togglable>
  )
  
  return (
    <div>
      <h1>Notes</h1> 
      <Notification message={errorMessage} />

      {user === null ? 
        <Togglable buttonLabel='login'>
          <LoginForm 
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
          />
        </Togglable> :
        <div>
          <p>{user.name} logged in</p>
          {noteForm()}
        </div>
      }
      
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

      <Footer />
    </div>
  )


}

export default App

