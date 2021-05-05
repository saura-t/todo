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

router.put('/status/:id', (request, response) => {
    // var conditions = { _id: request.params.id };

    // addTodoCopy.updateOne(conditions, {status:(request.body.status)})
    //     .then(res => {
    //         if(!res) { return response.status(404).end(); }
    //         return response.status(200).json(res);
    //     })
    //     .catch(error => next(error));

    var id = request.params.id;

    addTodoCopy.findById(id, function (error, todo){
        todo.status = !todo.status;
        todo.save(function (error) {
            if(error){
                console.log('Error!');
            }
        })
    })

    // addTodoCopy.findByIdAndUpdate(id, {status:!request.body.status})
    //     .then(result => {
    //         if(!result) { return response.status(404).end(); }
    //         return response.status(200).json(request.body.status)
    //     })
    //     .catch(error => next(error))
})

module.exports = router