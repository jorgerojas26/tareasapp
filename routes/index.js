const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const path = require('path');
const { ensureAuthenticated } = require('../config/auth')

const Todo = require('../model/TodoSchema');

router.post('/signup', (req, res, next) => {
    passport.authenticate('local-signin', (err, user, info) => {
        if (err) {
            console.log('error');

            return next(err);
        }

        if (!user) {
            console.log(info);
            return res.send({ info });
        }

        res.send({ user, info });
    })(req, res, next);
});

router.post('/signin', (req, res, next) => {
    passport.authenticate('local-signin', (err, user, info) => {
        if (err) {
            console.log('error');

            return next(err);
        }

        if (!user) {
            console.log(info);
            return res.send({ info });
        }

        const token = jwt.sign({ id: user._id }, process.env.secretKey, { expiresIn: '10s' });
        res.cookie('jwt', token, { httpOnly: false, secure: false, maxAge: 10000 });
        res.send({ user, token, info });
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.status(200).send('You are logged out');
})

router.get('/authenticated', (req, res) => {
    var token = req.cookies['jwt'];
    if (token) {
        jwt.verify(token, process.env.secretKey, function (err, decoded) {
            if (err) {
                return console.log(err);
            }
            console.log(decoded);
        })

        res.send({ authenticated: true });
    }
    else {
        res.send({ authenticated: false })
    }

});

router.get('/profile', (req, res) => {

    res.send({ authenticated: true })
});

router.get('/api/getTodoList', (req, res) => {
    Todo.find({}, (err, todoList) => {
        if (!err) {
            res.send(todoList)
        }
    });
});

router.post('/api/addTodo', (req, res) => {
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

router.put('/api/updateTodo/:todo_id', (req, res) => {
    const { title, responsible, description, priority } = req.body
    const updatedTodo = { title, responsible, description, priority }
    Todo.findByIdAndUpdate(req.params.todo_id, updatedTodo, (err) => {
        if (err) return console.error(err);
        console.log(" Todo updated");
        res.send('Todo updated');
    })

});

router.delete('/api/removeTodo/:todo_id', (req, res) => {
    Todo.findByIdAndDelete(req.params.todo_id, (err) => {
        if (err) return console.error(err);
        console.log(" Todo deleted");
        res.send('Todo deleted');
    })
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(200).json({ authenticated: false })

}
module.exports = router;  