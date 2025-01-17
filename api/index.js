require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
// const db = require("./connection/db");



// Configure CORS
const corsOptions = {
    origin: '*', // Allow only this domain
    methods: ['GET', 'POST'],    // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
};

// ---------------------------------Enable Libraries ---------------------------
app.use(cors(corsOptions));
app.use(morgan('combined'));

//------------------------------------------------------------------------------

//------------------------------- Middlewares -------------------------------


//------------------------------- db connection -------------------------------
require("./connection/db");



//------------------------------- Public Routes -------------------------------
app.get("/", (req, res) => res.send("Blogging Api on Vercel released on 15th jan 2025"));

app.get("/api-test", (req, res) => {
    res.json({
        message: "Successfully connected with blogging api from Vercel"
    });
});


//------------------------------- Private Routes close -------------------------------



app.listen(3000, () => console.log("Server ready on port 3000..."));



module.exports = app;