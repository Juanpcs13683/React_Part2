import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  

//we need to use a useEffect hook to get the data from the server, in this case the server
//is json-server
useEffect(() => {
  console.log('effect')
  axios.get('http://localhost:3001/persons').then(response => {
    console.log('promise fulfilled')
    setPersons(response.data)
  })
},[])


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
  //console.log(persons)

  //this part let us to change the variable while it is modified
  const handleNameChange = (event) => {
    console.log('cambio en el evento nombre', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('cambio en evento numero', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  //to show filter data
  const personsToShow = filter === ''
  ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return(
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName}
       handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
     
    </div>
    
  )

  //this piece of code is to debbug into the code when it is rendering
  // <div>debug filter: {filter}</div>
}

export default App