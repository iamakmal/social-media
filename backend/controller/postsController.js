const postsModel = require('../models/postModel')
const commentsModel = require('../models/commentModel')
const mongoose = require('mongoose')

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

const addComments = async(req,res)=>{
    const id = req.params.id
    const {comment} = req.body
    try{
        const updatedPost = await postsModel.findByIdAndUpdate(id, { $push: {comments: comment }})
        if(updatedPost){
            res.status(200).send(updatedPost)
        }
    }catch(error){
        res.status(500).send(error)
    }
}

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