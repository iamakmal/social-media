const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This is the model class which defines the attributes of the Comment
const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
},{
    timestamps: true,
})

module.exports = mongoose.model("Comments", commentSchema)