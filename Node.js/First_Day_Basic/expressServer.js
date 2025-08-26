
const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('This is a home page')
})

app.post('/addBlog', (req, res)=> {
    const {blogTitle} = req.body;
    res.send(`This is the title of the blog ${blogTitle}`)
})