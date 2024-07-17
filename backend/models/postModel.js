const mongoose = require('mongoose');
const commentModel = require('./commentModel');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    comments: [commentModel.schema]
},{
    timestamps: true,
})

module.exports = mongoose.model("Post", postSchema)