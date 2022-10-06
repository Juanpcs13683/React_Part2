import axios from "axios"

//const that is the url of the server
const baseUrl = 'http://localhost:3001/notes'

//const that returns the get to the url
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// post method for create a new object
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return  request.then(response => response.data)
}

//put method fot update an object
const update = (id, newObject) => {
    const request =  axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default{
    getAll, create, update
}