const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: String,
    responsible: String,
    description: String,
    priority: String
})

module.exports = mongoose.model('Todo', TodoSchema);