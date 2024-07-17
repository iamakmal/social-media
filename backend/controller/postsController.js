const postsModel = require('../models/postModel')
const mongoose = require('mongoose')

//This will create and save new post
const createPost = async(req, res) => {
    const {title, description, color} = req.body;
    const post = new postsModel({title, description, color});
    try{
        const newPost = await post.save();
        if(newPost){
            res.status(201).send(newPost);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

//Tis will retrieve all posts from the DB
const getAllPosts = async(req,res)=>{
    try{
        const posts = await postsModel.find();
        if(posts){
            res.status(200).send(posts);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

//This will retrieve a post by its ID
const getPostById = async(req,res)=>{
    const id = req.params.id;
    try{
        const post = await postsModel.findById(id);
        if(post){
            res.status(200).send(post)
        }
    }catch(error){
        res.status(500).send(error)
    }
} 

//This will add comments to the post
const addComments = async (req, res) => {
    const id = req.params.id; 
    const { comment } = req.body; 

    try {
        const updatedPost = await postsModel.findByIdAndUpdate(
            id,
            { $push: { comments: comment } },
            { new: true }
        );

        console.log(updatedPost);

        if (updatedPost) {
            res.status(200).send(updatedPost);
        } else {
            res.status(404).send("Post not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

//This will delete a post
const deletePost = async(req,res) =>{
    const id = req.params.id
    try{
        const deletedPost = await postsModel.findByIdAndDelete(id)
        if(deletedPost){
            res.status(200).send(deletedPost)
        }
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    addComments,
    deletePost
}