// Description: This file is the entry point for the application. It sets up the server and listens for incoming requests.
// Dependencies: express, path, logger, api
// Exported routes: none
const express = require('express');
const path = require('path');
const { logger } = require('./middleware/logger');
const api = require('./routes/index');

const port = process.env.PORT || 3001;

const app = express();

// Import custom middleware
app.use(logger);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for API routes
app.use('/api', api);

// Middleware for serving static files
app.use(express.static('public'));

// Get route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Get route for *
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Start the server on the port
const server = app.listen(port, () => {
    const host = server.address().address === '::' ? 'localhost' : server.address().address;
    const port = server.address().port;
    console.log(`Listening at http://${host}:${port}`);
});