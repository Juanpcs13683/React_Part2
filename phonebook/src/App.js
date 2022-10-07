import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personServices from './services/persons'
import NotificationSuccess from './services/NotificationSuccess';
import NotificationError from './services/NotificationError';

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  

//we need to use a useEffect hook to get the data from the server, in this case the server
//is json-server
useEffect(() => {
  personServices.getAll().then(intialPersons => {
    console.log('promise get fulfilled')
    setPersons(intialPersons)
  })
},[])


  //this part is used to add new persons
  const addPerson = (event) => {
    event.preventDefault()

    const personObj = {
      name: newName,
      number: newNumber
    }

//    let repetido = false

 //   for(let i=0; i<persons.length; i++){
 //     //personObj.name === persons[i].name just for name
 //     if(JSON.stringify(personObj.name) === JSON.stringify(persons[i].name)){
  //      repetido = true
    //    break
     // }
   // }


   // I replaced the logic below just using the find function when returns somethins
   //it returns the object and true if something and false if not
   //const name = persons.find(person => person.name === personObj.name)
    const person = persons.find(person => person.name == personObj.name)

   persons.find(person => person.name === personObj.name )? 
   window.confirm(`${personObj.name} is already added to phonebook, replace the old number with a new one?`)
   ? personServices.update(person.id, personObj)
   .then(response => setPersons(persons.map(person => person.name !== personObj.name ? person : response)))
   .then(response => {setSuccessMessage( `Modified number of  ${person.name} to ${personObj.number}`)
    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000);})
    .catch(error=>{
      setErrorMessage(`Information of ${personObj.name} has already been removed from server`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
    })
   : console.log()
    : personServices.create(personObj)
    .then(returnedPerson => {setPersons(persons.concat(returnedPerson))
      console.log(returnedPerson)
    setNewName('')
    setNewNumber('')
    setSuccessMessage(`Added ${personObj.name}`)
    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000);

    })
  }
  //console.log(persons)

  //this part let us to change the variable while it is modified
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setFilter(event.target.value)
  }

  //to show filter data
  const personsToShow = filter === ''
  ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  //handler for delete an object
  const handleDelete = (event) =>{
    

    if(window.confirm(`Delete ${event.target.name} ?`)){
      personServices.delet(event.target.value)
      .then(response =>{
        console.log('resquest delete done')
        setErrorMessage(`${event.target.name} has been deleted`)
        setPersons(persons.filter(p => p.id != event.target.value))
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
        

//       persons.forEach(element => {
  //      if(element.id != id){
    //      window.alert(element)
      //    console.log(element)
       // }
        
      // });
     
      })
    }
    
      
      //setPersons()
    
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <NotificationSuccess messageSuccess={successMessage} />
      <NotificationError messageError={errorMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName}
       handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete}/>
     
    </div>
    
  )

  //this piece of code is to debbug into the code when it is rendering
  // <div>debug filter: {filter}</div>
}

export default App