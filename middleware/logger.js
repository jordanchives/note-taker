const logger = (req, res, next) => {
    // Define ANSI escape sequences for colors
    const green = '\x1b[32m';
    const yellow = '\x1b[33m';
    const red = '\x1b[31m';

    try {
        // Switch statement to handle different request methods
        switch (req.method) {
            // Log GET request with green color
            case 'GET':
                console.log(green + 'GET request to ' + req.path);
                break;
            // Log POST request with yellow color
            case 'POST':
                console.log(yellow + 'POST request to ' + req.path);
                break;
            // Log DELETE request with red color
            case 'DELETE':
                console.log(red + 'DELETE request to ' + req.path);
                break;
            // Log unknown request methods
            default:
                console.log('Unknown request method: ' + req.method);
                break;
        }
    } catch (error) {
        // Error handling in case of unexpected errors
        console.error('Error occurred in logger middleware:', error);
    }

    // Call the next middleware in the stack
    next();
};

module.exports = { logger };