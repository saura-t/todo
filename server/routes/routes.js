const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const addTodoCopy = require('../models/AddTodoModels')

router.get('/todos',(request, response) => {
    addTodoCopy.find()
    .then(result => {
        response.status(200).json(result);
    })
    .catch(error => {
        console.log(error)
        response.status(500).json({
            error:error
        })
    })
})

router.post('/addtodo', (request, response) => {
    const addNewTodo = new addTodoCopy({
        title:request.body.title,
        date:request.body.date,
        time:request.body.time
    })
    addNewTodo.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router