import React from 'react';
import Weather from './Weather';

const Country = (props) =>{
    const country = props.p
    //console.log("language",Object.values(props.languages))
    return(
        <div>
            <h2 key={country.name.common}>{country.name.common}</h2>
            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Area:</b> {country.area}</p>
            
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(language=> <li>{language}</li>)}
            </ul>
            <img src={country.flags.png} width="120px" />
            <h3>Weather Helsinki</h3>
            <Weather p={country} />
        </div>
    )
}

export default Country