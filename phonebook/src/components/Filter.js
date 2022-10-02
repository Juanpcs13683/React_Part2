import React from 'react';

const Filter = ({filter, handleFilterChange}) => {

    
    //console.log('props filter component ',props) 
    return(
    
    <div>
    <label>filter show with <input value={filter} onChange={handleFilterChange} /></label>
  </div>
)}

export default Filter
