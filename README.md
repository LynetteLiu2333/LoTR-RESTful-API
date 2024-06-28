# Lord of the Rings Passport API

This is the LOTR Passport API, a RESTful API for managing characters from the Lord of the Rings universe.

## Table of Contents

- [Installation](#installation)
- [Endpoints](#endpoints)
- [Testing](#testing)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/LOTR-Passport-API.git
    cd LOTR-Passport-API
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
