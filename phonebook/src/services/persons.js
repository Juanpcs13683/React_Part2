import axios from "axios"


// url to connect the server
const baseUrl = 'http://localhost:3001/persons'

//method to get all the data
const getAll = () => {
    const request = axios.get(baseUrl)
return request.then(response => response.data)
}

//method to add a new object
const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}


//method to update an object
const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}` ,newPerson)
    return request.then(response => response.data)
}

//delete method
const delet = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response)
}

export default { getAll, create, update, delet}