require("dotenv").config(); // Load environment variables
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const uploadRoutes = require('./src/route/upload'); // Use require instead of import


// CORS configuration
const corsOptions = {
  origin: "*", // Allow all origins (change to specific domain in production)
  methods: ["GET", "POST"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

// Middleware configuration
app.use(cors(corsOptions)); // Enable CORS
// app.use(morgan("combined", { stream: logStream })); // Logs to file
app.use(morgan("combined")); // Logs to console


// Routes
app.get("/", (req, res) => res.send("Blogging API on Vercel, released on 20Th Jan 2025"));

app.get("/api-test", (req, res) => {
  res.json({
    message: "Successfully connected with the blogging API from Vercel",
  });
});


// ------------------------------------------- route path -------------------------------------------


app.use('/api', uploadRoutes);


// Start server
app.listen(4000, () => console.log("Server ready on port 4000..."));

module.exports = app;
