import { useState } from 'react'
import  React from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('insert new name')
  const [newNumber, setNewNumber] = useState('insert new number')

  //functions to add content
  const addPerson = (event) => {
    event.preventDefault()
    //creamos un nuevo objeto
    const personOjb = {
      name: newName,
      Number, newNumber
    }

    setPersons(persons.concat(personOjb))
    setNewName('Persona agregada')
    setNewNumber('persona agregada')
  }

  console.log(persons)

//handle = controladores let us to catch up the changes on the actual const

const handleNameChange = (event) => {
  console.log('target de evento nombre' ,event.target.value)
  setNewName(event.target.value)
}

const handleNumberChange = (event) => {
  console.log('target de evento number', event.target.value)
  set
}


  return(
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}


export default App