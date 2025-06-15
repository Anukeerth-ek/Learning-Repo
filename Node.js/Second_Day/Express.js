
const express = require('express')

const app = express();

const  PORT = 3000;

let users = [{id: 1, name: 'Kevin'}]

app.use(express.json())

// GET ALL THE USERS 
app.get('/user', (req, res)=> {
    res.json(users)
})

// POST A NEW USER
app.post('/post', (req, res)=> {
    const newUser = {id: Data.now(), ...req.body}
    users.push(newUser);

    app.status(201).json(newUser)
})

// PUT A EXISTING USER
app.put('/user/:id', (req, res)=> {

    const {id} = req.params;

    users = users.map(user => user.id === id ? {...user, ...req.body} : user)
    res.json({message: 'User Updated'})
})

// DELETE AN EXISTING USER
app.delete('/user/:id', (req, res)=> {
    const {id} = req.params;

    users = users.filter(user=> user.id !== id);
    res.json({'message': 'user deleted'})
})

app.listen(PORT, ()=> {
    console.log(`App running in ${PORT}`)
})