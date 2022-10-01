import React, { useState } from 'react';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //this part is used to add new persons
  const addPerson = (event) => {
    event.preventDefault()

    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }

    let repetido = false

    for(let i=0; i<persons.length; i++){
      //personObj.name === persons[i].name just for name
      if(JSON.stringify(personObj.name) === JSON.stringify(persons[i].name)){
        repetido = true
        break
      }
    }
    const sav = repetido 
    ? window.alert(personObj.name+' is already added to phonebook')
    : setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')

  }
  console.log(persons)

  //this part let us to change the variable while it is modified
  const handleNameChange = (event) => {
    console.log('cambio en el evento nombre', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('cambio en evento numero', event.target.value)
    setNewNumber(event.target.value)
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}  onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
      </div>
      <div>debug name: {newName}</div>
    </div>
    
  )
}

export default App