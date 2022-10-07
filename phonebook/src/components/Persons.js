import React from 'react';

const Persons =  ({ personsToShow, handleDelete }) => (
    <div>
        {personsToShow.map(person => <p key={person.id}>{person.name} {person.number} <button value={person.id} name={person.name} onClick={handleDelete}>delete</button></p>)}
      </div>
)

export default Persons