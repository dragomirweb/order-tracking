'use strict';

var Todo = require("./models/todo.js");

var todos = [
    'Comanda',
];

todos.forEach(function(todo, index) {
    Todo.find({
        'name': todo
    }, function(err, todos) {
        if (!err && !todos.length) {
            Todo.create({
                completed: false,
                order: index + 1    ,
                name: todo
            });
        }
    });
});
