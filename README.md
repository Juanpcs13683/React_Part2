# React_Part2
This repository is for learning react and made some exercises in the full-stack path,

## Part 2-b Forms
### How to install the json-server
Usually we use the data saved in our application but in the web side so we need to get it from the side server,
we need to keep the data for the **Phonebook** project in the json-server.

-Let's star the **React Aplication** by using the command ```npm start``` in the **node terminal**,
this will open the aplication in the browser at **http://localhost:3000**

-we nee to use the server but by default it will be use the same adress as the react app so 
we need to add the **npm** repositories to our root application and then we can storage the data
in a file called **db.json** let's do it.

###Create db.json and add the data
we cut the data from the App.js that was stored in the **persons array**, and then paste it into 
the **db.json** and this will result:
```
{
    "persons"[
    { "name": "Arto Hellas", "number": "040-123456", "id": 1 },
    { "name": "Ada Lovelace", "number": "39-44-5323523", "id": 2 },
    { "name": "Dan Abramov", "number": "12-43-234345", "id": 3 },
    { "name": "Mary Poppendieck", "number": "39-23-6423122", "id": 4 }
    ]
}
```


