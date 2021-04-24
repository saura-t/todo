const mongoose = require('mongoose')

const addTodo = new mongoose.Schema({
    title:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    status:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('mytable',addTodo)