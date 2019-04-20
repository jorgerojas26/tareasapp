const express = require('express');
const path = require('path');
const app = express();

const database = require('./database')

const Todo = require('./model/TodoSchema')

app.use(express.json())
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getTodoList', (req, res) => {
    Todo.find({}, (err, todoList) => {
        if (!err) {
            res.send(todoList)
        }
    });

    console.log('TodoList sent');
});

app.post('/api/addTodo', (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        responsible: req.body.responsible,
        description: req.body.description,
        priority: req.body.priority

    });

    todo.save(function (err) {
        if (err) return console.error(err);
        console.log(" Todo saved");
        res.send('Todo saved');
    });


});

app.put('/api/updateTodo/:todo_id', (req, res) => {
    const { title, responsible, description, priority } = req.body
    const updatedTodo = { title, responsible, description, priority }
    Todo.findByIdAndUpdate(req.params.todo_id, updatedTodo, (err) => {
        if (err) return console.error(err);
        console.log(" Todo updated");
        res.send('Todo updated');
    })

});

app.delete('/api/removeTodo/:todo_id', (req, res) => {
    Todo.findByIdAndDelete(req.params.todo_id, (err) => {
        if (err) return console.error(err);
        console.log(" Todo deleted");
        res.send('Todo deleted');
    })
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log('App is listening on port ' + port); 