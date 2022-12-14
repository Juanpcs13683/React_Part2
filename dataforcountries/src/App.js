import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './components/Country';


function App() {
  //array to save the data
  const[countries, setCountries] = useState([])
  const[find, setFind] = useState('')

  //hook to get the data and save it inside countries array
  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all').
    then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
  },[])

//handle to change the sate of the array
const handleFindChange = (event) => {
  console.log('handle find', event.target.value)
  setFind(event.target.value)
}

const dataFiltered = find === '' ? '' : countries.filter(country => country.name.common.toLowerCase().includes(find.toLowerCase()))




  //console.log(countries[90])
  return (
    <div>
      <label>find countries <input value={find} onChange={handleFindChange} placeholder='Type a country'/></label>
      <div>
        {dataFiltered === ''? '' 
        : dataFiltered.length>10? <p>Too many matches, specify another filter</p>
        : dataFiltered.length<10 && dataFiltered.length>1  
        ? dataFiltered.map(country => (<label><p key={country.name.common}>{country.name.common}</p> <button onClick={() => setFind(country.name.common)} > show</button></label>)) 
        : dataFiltered.map(country => 
        <Country p={country} />
        )}
      </div>
    </div>
  );
}

export default App;
