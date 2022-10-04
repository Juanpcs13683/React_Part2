import React from 'react';

const Country = (props) =>{
    //console.log(props.name)
    //console.log("language",Object.values(props.languages))
    return(
        <div>
            <h2 key={props.p.name.common}>{props.p.name.common}</h2>
            <p><b>Capital:</b> {props.p.capital}</p>
            <p><b>Area:</b> {props.p.area}</p>
            
            <h3>languages:</h3>
            <ul>
                {Object.values(props.p.languages).map(language=> <li>{language}</li>)}
            </ul>
            <img src={props.p.flags.png} width="120px" />
        </div>
    )
}

export default Country