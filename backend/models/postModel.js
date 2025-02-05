const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This is the model class which defines the attributes of the Post
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    comments: [
        {
            type: String
        }
    ]
},{
    timestamps: true,
})

module.exports = mongoose.model("Post", postSchema)