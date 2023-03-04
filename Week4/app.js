const express = require('express')
require('dotenv').config()
const app=express()

app.get('/', function(req, res) {
    res.send(`get called`)
})

app.post('/post', function(req, res) {
    console.log('post called')
})

//req parameters
app.patch('/patch/:id', function(req, res) {
    console.log(`patch ${req.params.id}`)
})

app.delete('/delete/:id', function(req, res) {
    console.log(`delete ${req.params.id}`)
})
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
