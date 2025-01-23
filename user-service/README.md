# User Service Microservice

## Overview
The **User Service Microservice** is a highly scalable, modular, and extensible application designed to handle all aspects of user management for modern applications. It supports multiple authentication mechanisms, user profile management, and admin functionalities while adhering to best practices such as the **SOLID principles**, **security standards**, and **cloud-native architecture** for scalability and high availability.

---

## Features

### Authentication
- **Email/Password Authentication**: Secure registration and login using hashed passwords.
- **Phone OTP Authentication**: OTP-based authentication using providers like Twilio or Firebase.
- **Social OAuth Authentication**: Supports Google, Facebook, and GitHub OAuth login.
- **JWT-based Authentication**: Stateless session management using access and refresh tokens.

### Profile Management
- Retrieve user profiles.
- Update user details (e.g., name, email, phone).

### Admin Features
- Manage users (e.g., view, activate, deactivate accounts).
- Monitor system usage through logs and metrics.

### Security
- **CSRF Protection**: Mitigates cross-site request forgery attacks.
- **Rate Limiting**: Prevents abuse by limiting requests per IP.
- **Password Hashing**: Securely store passwords using bcrypt.
- **CORS**: Restricts access to trusted origins.
- **Environment Variables**: Secure sensitive configurations using `.env` files.

### Scalability and Deployment
- Dockerized for containerized deployment.
- Kubernetes configurations for horizontal scaling and load balancing.
- Redis caching for optimized performance.
- API rate limiting for abuse prevention.

### Observability
- Integrated logging using Winston and Morgan.
- Prometheus metrics for monitoring.
- Distributed tracing support with OpenTelemetry.

---

## Directory Structure
```
user-service/
├── api/
│   ├── docs/                  # API documentation (e.g., Swagger)
│   └── gateways/              # API gateway for external integrations
├── app/
│   ├── config/                # Configuration files (e.g., database, Redis, OAuth)
│   ├── controllers/           # Core business logic
│   ├── middleware/            # Request/response middleware
│   ├── models/                # Database schemas/models
│   ├── routes/                # API route definitions
│   ├── services/              # Core services (e.g., email, OTP, OAuth)
│   └── utils/                 # Utility functions and helpers
├── database/                  # Database migration and seeder files
├── deployments/               # Deployment configurations (Docker, Kubernetes, CI/CD)
├── tests/                     # Unit, integration, and e2e tests
├── public/                    # Public assets (e.g., email templates)
├── logs/                      # Application logs
├── scripts/                   # Maintenance and migration scripts
├── .env                       # Environment variables
├── Dockerfile                 # Dockerfile for containerization
├── README.md                  # Project documentation
└── package.json               # Dependencies and scripts
```

---

## Installation and Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB Atlas** or a local MongoDB instance
- **Redis**
- Docker and Kubernetes (for deployment)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the `.env` file:
   Copy the `.env.example` file to `.env` and configure environment variables:
   ```bash
   cp .env.example .env
   ```

   Example:
   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
   JWT_SECRET=your_jwt_secret
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```

4. Run database migrations and seeders:
   ```bash
   npm run migrate
   npm run seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

### Scripts
- **Start Development Server**: `npm run dev`
- **Run Tests**: `npm test`
- **Lint Code**: `npm run lint`
- **Run Migrations**: `npm run migrate`
- **Run Seeders**: `npm run seed`
- **Build Docker Image**: `docker build -t user-service .`

---

## API Endpoints

### Authentication
| Method | Endpoint                | Description                        |
|--------|-------------------------|------------------------------------|
| POST   | `/api/auth/signup`      | Register with email and password  |
| POST   | `/api/auth/login`       | Login with email and password     |
| POST   | `/api/auth/otp/send`    | Send OTP to user's phone          |
| POST   | `/api/auth/otp/verify`  | Verify OTP                        |
| GET    | `/api/auth/oauth/:provider` | OAuth redirect to provider   |
| GET    | `/api/auth/oauth/:provider/callback` | OAuth callback      |

### Profile Management
| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| GET    | `/api/profile`   | Fetch logged-in user profile  |
| PUT    | `/api/profile`   | Update user profile           |

### Admin Features
| Method | Endpoint         | Description                   |
|--------|------------------|-------------------------------|
| GET    | `/api/admin/users` | Fetch all users              |
| PUT    | `/api/admin/users/:id` | Update user status        |

---

## Deployment

### Using Docker
1. Build the Docker image:
   ```bash
   docker build -t user-service .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file .env user-service
   ```

### Using Kubernetes
1. Apply Kubernetes manifests:
   ```bash
   kubectl apply -f deployments/kubernetes/
   ```
2. Access the service via the configured Ingress.

---

## Testing

### Run Unit and Integration Tests
```bash
npm test
```

### Testing Tools
- **Jest**: Unit testing framework
- **Supertest**: HTTP testing for API endpoints

---

## Observability

### Logs
Logs are stored in the `logs/` directory:
- `app.log`: General application logs
- `error.log`: Error logs
- `access.log`: Access logs

### Metrics
Expose Prometheus metrics at `/metrics` for real-time monitoring.

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

