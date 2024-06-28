# Lord of the Rings Passport API

## Table of Contents

- [Installation](#installation)
- [Endpoints](#endpoints)
- [Testing](#testing)

## Overview

The Lord of the Rings (LOTR) Passport API is a RESTful web service designed to manage and provide information about characters from the Lord of the Rings universe. This API allows users to perform CRUD (Create, Read, Update, Delete) operations on the character data while ensuring secure access through user authentication and authorization.

## Features

- **User Authentication & Authorization:** Secure endpoints using JWT (JSON Web Tokens) to ensure that only authenticated users can perform certain actions.

- **Character Management:** Full CRUD functionality for managing LOTR characters, including creating, reading, updating, and deleting character records.

- **Modular Architecture:** Clean separation of concerns with models, routes, and middleware, making the codebase easy to understand and extend.

- **Error Handling:** Robust error handling to ensure the API responds gracefully to invalid requests and server errors.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/LynetteLiu2333/LoTR-RESTful-API.git
    cd LoTR-RESTful-API
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```env
    MONGO_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the server:**

    ```bash
    npm start
    ```

## Endpoints

The API provides the following endpoints for managing characters:

### Authentication

- **POST /api/users/register**

    Register a new user.

    ```json
    {
        "username": "exampleuser",
        "password": "examplepassword"
    }
    ```

- **POST /api/users/login**

    Login a user and receive a JWT token.

    ```json
    {
        "username": "exampleuser",
        "password": "examplepassword"
    }
    ```

### Characters

- **GET /api/characters**

    Retrieve all characters.

- **POST /api/characters**

    Create a new character. Requires JWT authentication.

    ```json
    {
        "name": "Aragorn",
        "race": "Human",
        "birth": "2931",
        "death": "120",
        "gender": "Male",
        "hair": "Dark",
        "height": "6'6",
        "realm": "Gondor",
        "spouse": "Arwen"
    }
    ```

- **GET /api/characters/:id**

    Retrieve a specific character by ID. Requires JWT authentication.

- **PUT /api/characters/:id**

    Update a character by ID. Requires JWT authentication.

    ```json
    {
        "name": "Aragorn II Elessar",
        "race": "Human",
        "birth": "2931",
        "death": "120",
        "gender": "Male",
        "hair": "Dark",
        "height": "6'6",
        "realm": "Gondor",
        "spouse": "Arwen"
    }
    ```

- **DELETE /api/characters/:id**

    Delete a character by ID. Requires JWT authentication.

## Testing

To run the tests, use the following command:

```bash
npm test
```
