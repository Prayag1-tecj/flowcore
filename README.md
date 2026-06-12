# FlowCore – Scalable Task & Notes Management Platform

## Overview

FlowCore is a scalable task and notes management platform built with Django REST Framework and PostgreSQL.

The platform provides secure JWT authentication, role-based access control, task management, and note management APIs. It is designed with scalability and maintainability in mind using a modular architecture.

---

## Features

### Authentication & Authorization

* User Registration
* User Login
* JWT Authentication
* Refresh Token Support
* Current User Endpoint
* Role-Based Access Control (Admin/User)

### Task Management

* Create Task
* List Tasks
* Retrieve Task
* Update Task
* Delete Task

### Notes Management

* Create Note
* List Notes
* Retrieve Note
* Update Note
* Delete Note

### Security

* Password Hashing
* JWT Protected APIs
* Ownership-Based Access Control
* Input Validation

### Documentation

* Swagger UI
* Postman Collection

---

## Tech Stack

### Backend

* Python
* Django
* Django REST Framework
* PostgreSQL
* JWT Authentication (SimpleJWT)
* DRF Spectacular (Swagger)

### Tools

* Git
* GitHub
* Postman

---

## Database Design

User
│
└── Task
│
└── Note

Relationships:

* One User → Many Tasks
* One Task → Many Notes

---

## API Versioning

All APIs are versioned:

/api/v1/

Examples:

/api/v1/auth/register/
/api/v1/auth/login/
/api/v1/tasks/
/api/v1/tasks/notes/

---

## Running Locally

### Clone Repository

git clone <repository-url>

### Create Virtual Environment

python -m venv venv

### Activate Virtual Environment

Windows:

venv\Scripts\activate

### Install Dependencies

pip install -r requirements.txt

### Configure Environment Variables

Create .env

SECRET_KEY=your_secret_key

DB_NAME=flowcore_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

### Apply Migrations

python manage.py migrate

### Run Server

python manage.py runserver

---

## API Documentation

Swagger:

/api/docs/

OpenAPI Schema:

/api/schema/

---

## Frontend Features

The React frontend provides:

* User Registration
* User Login
* JWT Authentication Handling
* Protected Routes
* Dashboard with Live Statistics
* Recent Tasks Overview
* Task Creation & Management
* Responsive UI built with Tailwind CSS

### Frontend Tech Stack

* React
* Vite
* Tailwind CSS
* Axios
* React Router DOM


## Future Enhancements

* React Frontend
* Docker Deployment
* Redis Caching
* Background Jobs
* Notifications
* Microservices Architecture
