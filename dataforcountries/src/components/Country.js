import React from 'react';

const Country = (props) =>{
    //console.log("language",Object.values(props.languages))
    return(
        <div>
            <h2 key={props.name}>{props.name}</h2>
            <p><b>Capital:</b> {props.capital}</p>
            <p><b>Area:</b> {props.area}</p>
            
            <h3>languages:</h3>
            <ul>
                {Object.values(props.languages).map(language=> <li>{language}</li>)}
            </ul>
            <img src={props.img} width="120px" />
        </div>
    )
}

export default Country