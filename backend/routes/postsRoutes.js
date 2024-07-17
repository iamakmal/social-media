const route = require('express').Router()
const {createPost,getAllPosts,getPostById,addComments,deletePost} = require('../controller/postsController')

//This will specify the API endpoints for each CRUD operation
route.post("/", createPost)
route.get("/",getAllPosts)
route.get("/:id",getPostById)
route.put("/:id",addComments)
route.delete("/:id",deletePost)

module.exports = route