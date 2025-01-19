const winston = require('winston');
const path = require('path');
const fs = require('fs');

// Define log directory path
const logDirectory = path.join(__dirname, '..', '..', 'storage', 'logs');

// Ensure the directory exists
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

// Create logger instance
const logger = winston.createLogger({
  level: 'info', // You can change this based on your logging level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    // File transport
    new winston.transports.File({ filename: path.join(logDirectory, 'api.log') }),

    // Console transport (Optional)
    new winston.transports.Console()
  ]
});

module.exports = logger;
