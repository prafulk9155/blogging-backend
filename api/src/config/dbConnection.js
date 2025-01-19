const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Optional since it's deprecated
      useUnifiedTopology: true, // Optional since it's deprecated
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error(
      "MongoDB connection error:",
      error.message || "Unknown error"
    );
    // Log the error and proceed without stopping the server
  }
};

module.exports = connectDB; // Export the function using CommonJS
