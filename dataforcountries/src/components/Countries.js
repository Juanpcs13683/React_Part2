import React from 'react'

const Countries = (props) => {

    return(
        <div>
            {props.map(country => (<p>{country.name}</p> <button>show</button>))}
        </div>
    )
}

export default Countries