import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('insert name...')
  const [newPhone, setNewPhone] = useState('insert new phone')

 const addperson = (event) => {
  event.preventDefault()

  const personObject = {
    name:newName,
    phone:newPhone,
    id:persons.length+1
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

 console.log(persons)

  const handlePersonChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
    
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addperson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number : <input value={newPhone}  onChange={handlePhoneChange}/>
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