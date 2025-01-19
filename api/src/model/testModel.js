const mongoose = require('mongoose');

// Define a schema for the 'Test' collection
const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // 'name' is required
  },
  age: {
    type: Number,
    required: true, // 'age' is required
  },
});

// Create a model based on the schema
const TestModel = mongoose.model('Test', testSchema);

// Export the model so that it can be used in other parts of your application
module.exports = TestModel;
