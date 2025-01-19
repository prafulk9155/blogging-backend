const { put } = require('@vercel/blob');
const multer = require('multer');

// Configure multer to handle file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory (default behavior)
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
});

// File upload logic
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Ensure req.file is present and has buffer
    if (!req.file.buffer) {
      return res.status(400).json({ message: 'File data is missing' });
    }

    // Read the uploaded file as a string (assuming it's a text file)
    const fileContent = req.file.buffer.toString('utf-8');

    // Upload the file to Vercel Blob storage with token from environment variable
    const { url } = await put(`uploads/${req.file.originalname}`, fileContent, {
      access: 'public', // or 'private' based on your requirement
      token: process.env.BLOB_READ_WRITE_TOKEN, // Token for authentication
    });

    // Return the file path (URL)
    return res.status(200).json({
      message: 'File uploaded successfully',
      filePath: url,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Middleware to handle file upload
const uploadMiddleware = upload.single('file'); // Make sure the field name is 'file'

// Export the functions for use in routes
module.exports = { uploadFile, uploadMiddleware };
