const mongoose = require("mongoose");

// const connectionString="mongodb+srv://prafulk9155:AZbJtfjhJKuvSscI@cluster0.jcjuo.mongodb.net/blog-db?retryWrites=true&w=majority&appName=Cluster0"
const connectionString = 'mongodb://localhost:27017/blog-db';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB successfully!"))
.catch((err) => console.error("Error connecting to MongoDB:", err));
