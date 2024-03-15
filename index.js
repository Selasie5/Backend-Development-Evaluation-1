//Importing the express package for use
const express = require("express");
//Initializing the express module
const app = express ();
//Declaring the server on which the backend application should run
const port = 3000;
//Implementing a GET  route on ("/") to send a simple message 
app.get("/",(req,res)=>
{
    //sending  this response to the browser from the server
    res.send("Welcome to my Express App!");
})

//Setting up a route parameter for a user id
app.get("/user/:id",
(res,req)=>
{
    const userID = req.params.id;
    res.send(userID);
})

//setting up a route to handle undefined request
app.get("*", (req, res)=>
{
    //This is the error message the server will send upon a bad request
    res.send(`Oops, the specified url cannot be found`)
    //The server returns this status code upon an undefined request
    res.send.status(404);
    console.log(res.sendStatus)
})


//Starting the server by telling the server to listen to the specified port
app.listen(port, ()=>
{
    console.log(`The server has started running on port ${port}`);
})

