import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('insert name...')

 const addperson = (event) => {
  event.preventDefault()

  const personObject = {
    name:newName
  }

  // this iteration let us figure out if the array 'persons' has already same value input in it
  let nameExists

  for(var i=0; i<persons.length; i++){
    console.log(JSON.stringify(newName)===JSON.stringify(persons[i].name))
    if(JSON.stringify(newName)===JSON.stringify(persons[i].name)){
      nameExists = true
      break
    }
  }



  nameExists ? window.alert(newName + ' is already added to phonebook'): setPersons(persons.concat(personObject));setNewName('')

  nameExists = false

 }

 //console.log(persons)

  const handlePersonChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addperson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( person => <p key={person.name}>{person.name}</p>)}
      <div>debug: {newName}</div>
    </div>
  )
}

export default App