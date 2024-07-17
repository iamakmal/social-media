const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
require("dotenv").config({ path: "./.env"});
const port = process.env.PORT || 5000;

const db = process.env.MONGO_URI;
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((error)=>{
        console.error('Error connecting to MongoDB:', error);
    });

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});