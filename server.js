// REQUIRE DOTENV DATABASE CONNECTION
require('dotenv').config();

// CONSTANTS TO REQUIRE FROM EXTERNAL FILES
const
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    ToDo = require('./models/toDo'),
    PORT = process.env.PORT || 3000;

// DATABASE
require('./db');

// CONFIGURATIONS


// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public','views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(logger('dev'));


// ROUTERS
// INDEX
app.get('/api/todolist', (req, res) => {
    ToDo.find({}, (err, toDoList) => {
        if (err) res.json({ success: false, err });
        res.json({ success: true, toDoList });
    })
}),

// CREATE
app.post('/api/todolist', (req, res) => {
    ToDo.create(req.body, (err, newToDo) => {
        if (err) res.json({ success: false, err });
        res.json({ success: true, newToDo});
    })
}),

// UPDATE
app.patch('/api/todolist/:id', (req, res) => {
    let { params, body } = req;
    ToDo.findByIdAndUpdate(params.id, body, { new: true }, (err, updatedToDo) => {
        if (err) res.json({ success: false, err });
        res.json({ success: true, updatedToDo});
    })
}),

// DELETE
app.delete('/api/todolist/:id', (req, res) => {
    ToDo.findByIdAndDelete(req.params.id, (err, deletedToDo) => {
        if (err) res.json({ success: false, err });
        res.json({ success: true, deletedToDo });
    })
})


// LISTENING PORT
app.listen(PORT, err => {
    console.log(err || `Listening on PORT ${PORT}`);
});