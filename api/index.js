require("dotenv").config(); // Load environment variables
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const connectDB = require("./src/config/dbConnection");

// Create a write stream for logging to a file
const logStream = fs.createWriteStream(path.join(__dirname, "storage/logs/blog_api.log"), { flags: "a" });

// CORS configuration
const corsOptions = {
  origin: "*", // Allow all origins (change to specific domain in production)
  methods: ["GET", "POST"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

// Middleware configuration
app.use(cors(corsOptions)); // Enable CORS
app.use(morgan("combined", { stream: logStream })); // Logs to file
app.use(morgan("combined")); // Logs to console

// Serve log files statically
app.use("/storage/logs", express.static(path.join(__dirname, "storage/logs")));

// Database connection
connectDB();

// Routes
app.get("/", (req, res) => res.send("Blogging API on Vercel, released on 20Th Jan 2025"));

app.get("/api-test", (req, res) => {
  res.json({
    message: "Successfully connected with the blogging API from Vercel",
  });
});

// Start server
app.listen(3000, () => console.log("Server ready on port 3000..."));

module.exports = app;
