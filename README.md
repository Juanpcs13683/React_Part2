# React_Part2
This repository is for learning react and make some exercises in the full-stack path.

## Part 2-b Forms
### How to install the json-server
Usually we use the data saved in our application but in the web side so we need to get it from the side server,
we need to keep the data for the **Phonebook** project in the json-server.

-Let's star the **React Aplication** by using the command ```npm start``` in the **node terminal**,
this will open the aplication in the browser at **http://localhost:3000**

-we nee to use the server but by default it will be use the same adress as the react app so 
we need to add the **npm** repositories to our root application and then we can storage the data
in a file called **db.json** let's do it.

### Create db.json and add the data
we cut the data from the App.js that was stored in the **persons array**, and then paste it into 
the **db.json** and this will result:
```
{
    "persons":[
    { "name": "Arto Hellas", "number": "040-123456", "id": 1 },
    { "name": "Ada Lovelace", "number": "39-44-5323523", "id": 2 },
    { "name": "Dan Abramov", "number": "12-43-234345", "id": 3 },
    { "name": "Mary Poppendieck", "number": "39-23-6423122", "id": 4 }
    ]
}
```
## 1- installing npm dependences (axios)
we install the axios dependences with the next command ```npm install axios``` in the root of our **phonebook application** and we can see if it was done by checking at 
```package.json``` in root of our app.

### Runing the json server from the root of the app
To run the **json-server** from the root of the app we can use this code: ```npx json-server --port 3001 --watch db.json```

### 2- Installing the ```json-server```
we can use the command ```npm install json-server --save-dev``` to install the json server and then we need to add some the next code on the ```package.json``` so this have to be like this:
```
{
  // ... 
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server -p3001 --watch db.json"
  },
}
```
we just added the **"server"*** part and this will set the server to the port **3001** because the 3000 is already used by the react app, after doing that the server is ready to run, so we can run it with ```npm run server``` and go the **http://localhost:3001/persons** in the browser and we will se the content of our **db.json**

### Setting the app to get the data from the server (json-server)
Once the app and the server are running by using two terminal one for each one:
```
terminal app:
npm start

terminal server:
npm run server
```
we need to make some code to get the data from the server and give it to the app, so we will use the next syntax:
```
useEffect(() => {
  console.log('effect')
  axios.get('http://localhost:3001/persons').then(response => {
    console.log('promise fulfilled')
    setPersons(response.data)
  })
},[])
```
as we can see in the code above we use the ***useEffect** hook to get the data, it recives two parameters: an arrow function and an empty array to let it know the it just have to execute once after the app end of render, and then inside the arrow function we use **axios** with the **get** method to acces to the **url** and get the info from that direction and save the response by using the **setPersons** function to save the data in the **persons array**.


### Making the app renderin automatic in the server
we need to create a file in the root of the app ```.env``` and we just write the next **```FAST_REFRESH=false```** inside the file and that will be all.

## How to get data acces from the openweather api
The first thing is get to the website and sign up to get an user and an api key to get acces to the api data from the server and then you can implement it on your react application, one you have the data you store it into the an array and you can pass to the child components.

## Creating a new item and storing it into the json-server
In our case we use the method ```post``` from the ```axios``` package and we need to send the new method that need contains all the info stored in the new object that is the same as the array
in our case we are working on the notes appication and we need to add a new note, so thats why we use the the object in the function add a newNote and the object that get the info from the **HTML** and send it in Json format.
The lesson tell us to ommit the **id** element from the object it due to the json create its owns ids for the object, in our case we send the response info to the console.

### Render the data after sending to backend with POST method
we add some part of code to our application to let if make like this:

```addNote = event => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    date: new Date(),
    important: Math.random() > 0.5,
  }

  axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
}
```

### Change the importance of each note
we can change the importance by adding a toggle to the button with the next function:


```const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
```
