// This file defines the API routes.

// Import necessary modules
const router = require('express').Router();
const notesRouter = require('./notes'); // Import notes router

router.use("/notes", notesRouter); // Define endpoint for notes routes

module.exports = router; // Export API router
