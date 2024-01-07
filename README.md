# Book Management API

This is a simple Book Management System built with Node.js, Express, TypeScript, and MongoDB.

## Table of Contents
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Configuration](#environment-configuration)
    - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
    - [Create a Book](#create-a-book)
    - [Get All Books](#get-all-books)
    - [Get a Book by ID](#get-a-book-by-id)
    - [Update a Book](#update-a-book)
    - [Delete a Book](#delete-a-book)
- [Testing](#testing)
- [License](#license)
## Project Structure

```plaintext
/book-management-api
│   .gitignore                   
│   config.env                   
│   jest.config.ts               
│   package.json                 
│   tsconfig.json                
│   yarn.lock                    
│
├───.idea                        
│       .gitignore               
│       book-management-api.iml  
│       misc.xml                 
│       modules.xml              
│       vcs.xml                  
│       workspace.xml            
│                                
└───src                          
    │   app.ts                   
    │   server.ts                
    │
    ├───configs                  
    │       mongodb.ts           
    │
    ├───controllers
    │       book-controllers.ts
    │
    ├───helpers
    │       helpers.ts
    │
    ├───models
    │       bookModel.ts
    │
    ├───routes
    │       book-route.ts
    │
    └───test
            book.test.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kgmanojranga/book-management-api.git
   cd book-management-api
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### Environment Configuration

1. Create a `.env` file in the root of the project:

   ```plaintext
   PORT=9000
   DATABASE=mongodb://localhost:27017/bookdb
   DB_PASSWORD=your_db_password
   ```

2. Replace `your_db_password` with your MongoDB password.

### Running the Application

```bash
yarn dev
```

The server will start at http://localhost:9000.

## API Documentation

### Create a Book

**Endpoint:** `POST /api/v1/books`

**Request Body:**

```json
{
  "name": "Harry Potter and the Chamber of Secret",
  "rating": 8.5,
  "author": "J.K. Rowling"
}
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "_id": "6595275fd6baa2461277d46e",
    "name": "Harry Potter and the Chamber of Secret",
    "author": "J.K. Rowling",
    "rating": 8.5
  }
}
```

### Get All Books

**Endpoint:** `GET /api/v1/books`

**Response:**

```json
{
  "status": "success",
  "data": [
    {
      "_id": "6595275fd6baa2461277d46e",
      "name": "Harry Potter and the Chamber of Secret",
      "author": "J.K. Rowling",
      "rating": 8.5
    }
  ]
}
```

### Get a Book by ID

**Endpoint:** `GET /api/v1/books/:id`

**Response:**

```json
{
  "status": "success",
  "data": {
    "_id": "6595275fd6baa2461277d46e",
    "name": "Harry Potter and the Chamber of Secret",
    "author": "J.K. Rowling",
    "rating": 8.5
  }
}
```

### Update a Book

**Endpoint:** `PATCH /api/v1/books/:id`

**Request Body:**

```json
{
  "name": "Harry Potter and the Philosophers Stone"
}
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "_id": "6595275fd6baa2461277d46e",
    "name": "Harry Potter and the Philosophers Stone",
    "author": "J.K. Rowling",
    "rating": 8.5
  }
}
```

### Delete a Book

**Endpoint:** `DELETE /api/v1/books/:id`

**Response:**

```json
{
  "status": "success",
  "data": {
    "_id": "6595275fd6baa2461277d46e",
    "name": "Harry Potter and the Philosophers Stone",
    "author": "J.K. Rowling",
    "rating": 8.5
  }
}
```

## Testing

Run tests using:

```bash
yarn test
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.