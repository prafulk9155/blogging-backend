// routes/uploadRoutes.js

const express = require('express');
const { uploadMiddleware, uploadFile } = require('../controller/upload'); // Use require instead of import

const router = express.Router();

// Route to upload a file
router.post('/upload', uploadMiddleware, uploadFile);

module.exports = router;  // Use module.exports instead of export default
