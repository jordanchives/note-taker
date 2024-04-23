# Note Taker App

## Description

The Note Taker App is a Node.js application that allows users to write and save notes. It provides an interface for users to create, view, and delete notes. This application utilizes Express.js for handling server-side operations and routing.

## Table of Contents

- [Files](#files)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#preview)
- [License](#license)

## Files

- `server.js`: Entry point for the application. Sets up the server and handles incoming requests.
- `routes/index.js`: Defines the API routes.
- `routes/notes.js`: Defines routes for managing notes.
- `middleware/logger.js`: Custom middleware for logging request methods.
- `helpers/fsUtils.js`: Utility functions for reading from and writing to files.
- `helpers/uuid.js`: Function for generating unique identifiers.
- `db/db.json`: JSON file used as a database to store notes.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.

## Installation

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/jordanchives/note-taker.git
    ```

2. Navigate to the project directory:

    ```
    cd note-taker
    ```

3. Install dependencies:

    ```
    npm install
    ```

## Usage

1. Open a terminal and navigate to the project directory.

2. Run the following command:

    ```
    npm start
    ```

3. Open your web browser and go to `http://localhost:3001` to access the Note Taker App.

## Preview

A live demo of the application can be found [here](https://arcane-cove-11173-e3cfac796bb6.herokuapp.com/)

![Home preview](/assets/home.png)

![Notes preview](/assets/note.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
