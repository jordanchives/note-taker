// Description: Entry point for the application. Sets up the server and handles incoming requests.

// Import necessary modules
const express = require('express');
const path = require('path');
const { logger } = require('./middleware/logger'); // Import logger middleware
const api = require('./routes/index'); // Import API routes

const port = process.env.PORT || 3001; // Set port for the server

const app = express(); // Create express app

// Use custom middleware for logging
app.use(logger);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for API routes
app.use('/api', api);

// Middleware for serving static files
app.use(express.static('public'));

// Route for serving notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Route for serving other pages
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Start the server
const server = app.listen(port, () => {
    const host = server.address().address === '::' ? 'localhost' : server.address().address;
    const port = server.address().port;
    console.log(`Listening at http://${host}:${port}`);
});
