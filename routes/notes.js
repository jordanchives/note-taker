// This file contains routes for managing notes.

// Import necessary modules and utilities
const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils'); // Import file system utilities
const uuid = require('../helpers/uuid'); // Import utility for generating UUIDs

// GET Route for retrieving all notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json') // Read notes from file
        .then((data) => res.json(JSON.parse(data))) // Parse data and send as JSON response
        .catch((err) => res.status(500).json(err)); // Handle errors
});

// POST Route for adding a new note
notes.post('/', (req, res) => {
    const { title, text } = req.body; // Extract title and text from request body

    if (req.body) {
        const newNote = { // Create a new note object
            title,
            text,
            id: uuid(), // Generate a unique ID for the note
        };

        readAndAppend(newNote, './db/db.json'); // Append new note to file
        res.json(`Note added successfully with ID: ${newNote.id}`); // Send success response
    } else {
        res.error('Error adding note'); // Send error response if request body is empty
    }
});

// DELETE Route for deleting a specific note by ID
notes.delete('/:id', (req, res) => {
    const id = req.params.id; // Get note ID from request parameters
    readFromFile('./db/db.json') // Read notes from file
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id !== id); // Filter out the note with the given ID

            writeToFile('./db/db.json', result); // Write updated notes to file

            res.json(`Note ${id} deleted`); // Send success response
        })
        .catch((err) => res.status(500).json(err)); // Handle errors
});

module.exports = notes; // Export notes router
