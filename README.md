Here’s a combined README file for both `user_service` and `url_shortner` microservices:

```markdown
# Microservices Documentation

This repository contains two microservices: `user_service` and `url_shortner`. Each service is designed to operate independently and can be deployed and scaled as needed.

---

## User Service

The `user_service` handles user-related operations such as registration, authentication, profile management, and more.

### Features
- User Registration and Login (JWT-based authentication)
- Profile Management (View and Update User Data)
- Password Reset Functionality
- Secure Data Handling with Bcrypt and JWT
- User Deletion

### Tech Stack
- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Encryption**: Bcrypt
- **Environment Management**: dotenv

### Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/user_service.git
   ```
2. Navigate to the directory:
   ```bash
   cd user_service
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and configure the following:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/user_service
   JWT_SECRET=your_jwt_secret
   ```
5. Start the server:
   ```bash
   npm start
   ```

### API Endpoints
#### Authentication
- `POST /register` - Register a new user
- `POST /login` - Authenticate a user and return a JWT

#### User Management
- `GET /users/:id` - Retrieve user information
- `PUT /users/:id` - Update user profile
- `DELETE /users/:id` - Delete a user

#### Password Reset
- `POST /password-reset` - Request a password reset
- `POST /password-reset/confirm` - Confirm password reset

### Testing
Run unit and integration tests:
```bash
npm test
```

### Deployment
- Use Docker:
  ```bash
  docker build -t user_service .
  docker run -p 3000:3000 user_service
  ```

---

## URL Shortener Service

The `url_shortner` microservice provides functionality to shorten URLs and manage their redirection.

### Features
- Shorten URLs
- Retrieve Original URLs
- Redirect to Original URLs
- URL Expiry Management
- Basic Analytics (Click Count)

### Tech Stack
- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Environment Management**: dotenv
- **Unique ID Generation**: nanoid

### Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/url_shortner.git
   ```
2. Navigate to the directory:
   ```bash
   cd url_shortner
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and configure the following:
   ```env
   PORT=3001
   MONGO_URI=mongodb://localhost:27017/url_shortner
   ```
5. Start the server:
   ```bash
   npm start
   ```

### API Endpoints
#### URL Management
- `POST /shorten` - Shorten a new URL
  - **Request Body**:
    ```json
    {
      "url": "https://example.com",
      "expiry": "2025-01-01"
    }
    ```
- `GET /:shortCode` - Redirect to the original URL
- `GET /analytics/:shortCode` - Get analytics for a shortened URL

### Testing
Run unit and integration tests:
```bash
npm test
```

### Deployment
- Use Docker:
  ```bash
  docker build -t url_shortner .
  docker run -p 3001:3001 url_shortner
  ```

---

## General Notes
1. **Environment Variables**:
   Ensure each service has its `.env` file with the necessary variables configured.
2. **Docker Compose**:
   If you want to run both services together, consider using a `docker-compose.yml` file for orchestration.
3. **API Documentation**:
   Use tools like Swagger or Postman to generate API documentation for both services.

---

## License
This project is licensed under the MIT License.
```


