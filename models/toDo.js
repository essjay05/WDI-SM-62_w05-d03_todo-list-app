// REQUIRE IN MONGOOSE
const mongoose = require('mongoose');

// CREATE MONGOOSE SCHEMA 
const Schema = mongoose.Schema;

// CREATE NEW/TOPIC SCHEMA
const ToDoSchema = new Schema ({
    listItem: String,
    complete: Boolean
}, { timestamps: true} );


// CREATE MODEL
const ToDo = mongoose.model('ToDo', ToDoSchema);

// MAKE EXPORTABLE
module.exports = ToDo;