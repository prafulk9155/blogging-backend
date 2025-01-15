const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Blogging Api on Vercel released on 15th jan 2025"));

app.listen(3000, () => console.log("Server ready on port 3000..."));

module.exports = app;