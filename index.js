// server is instantiated
const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = 4000

// middleware to parse json request body
app.use(express.json());

// import routes for TODO Api
const todoRoutes = require("./routes/todos");

// mount the todo API routes (append ho jaenge iss directory structure ke baad)
app.use("/api/v1",todoRoutes);

// start the server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})

// connect to DB
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/",(req,res)=>{
    res.send("This is Homepage");
})