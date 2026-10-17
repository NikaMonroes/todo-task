var mongoose = require('mongoose'); // import mongoose to create a schema for the task model

var TaskSchema = new mongoose.Schema({ // create a schema for the task model
    TaskId: Number,
    Name: String,
    Deadline: Date,
});

module.exports = mongoose.model( // export the model to be used in other files
    'task', TaskSchema, 'Tasks');