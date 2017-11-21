'use strict';
var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name: String,
    order: String,
    tel: String,
    dateCreated: { type: Date, default: Date.now },
    dueDate: String,
    completed: Boolean
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;
