<div align="center">
    <img src="https://raw.githubusercontent.com/micaellimedeiros/easy-generator/10da56ddd540fca2453c96cd7bd9a413366b41f1/web/src/assets/logo.svg" />
</div>

<br />

<i>EasyGenerator is a modern full-stack web application that provides seamless user authentication using React on the frontend and NestJS on the backend. It features an intuitive design, robust security measures, and follows best practices for an optimal user experience.</i>

<br />

<div align="center">
    <img src=https://github.com/micaellimedeiros/easy-generator/assets/54600663/b895e8fc-2f00-4d30-90ed-90ddc9bb975e width="70%" />
</div>


<hr />

## 🧰 Features
- **User Authentication:**
  - Sign up and sign in functionality.
  - Password requirements: Minimum length of 8 characters, at least 1 letter, 1 number, and 1 special character.
    
- **Frontend Development:**
  - Developed using React with TypeScript.
  - User authentication module with React Hook Form for signup and login forms.
  - Beautiful design elements with Styled Components.
    
- **Backend Development:**
  - Implemented with NestJS framework.
  - MongoDB integrated as the database.
  - JWT-based authentication.
    

## 👩‍💻 Technologies Used
- Frontend:
  - React
  - TypeScript
  - Styled Components
  - React Hook Form
  - React Router Dom
  - React Toast
    
- Backend:
  - NestJS
  - MongoDB
  - Mongoose
  - JWT
  - TypeScript
    
- Other:
  - Axios

## ⚒️ Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
    git clone https://github.com/micaellimedeiros/easy-generator.git
    cd easy-generator

### Run docker compose
    cd api
    docker-compose up -d

### Install backend dependencies
    Copy the .env.example file to .env and update the environment variables with your database information
    yarn install
    yarn start:dev

### Install frontend dependencies
    cd ../web
    yarn install
    yarn dev

## Authentication Endpoints

1. Sign Up

    - Endpoint:
        POST /api/auth/register
    - Description:
        Allows users to create a new account.
    - Request Body:
        { "email": "user@example.com", "name": "John Doe", "password": "password123" }
    - Response:
        { "message": "You are now registered." }
        Set JWT cookie for authentication.

2. Log In

    - Endpoint:
        POST /api/auth/login
    - Description:
        Allows users to log in to the application.
    - Request Body:
        { "email": "user@example.com", "password": "password123" }
    - Response:
        { "message": "You are now authenticated." }
        Set JWT cookie for authentication.

3. Log Out

    - Endpoint:
        POST /api/auth/logout
    - Description:
        Logs out the authenticated user.
    - Request Body:
        Empty
    - Response:
        { "message": "Logout successful." }
        Clear JWT cookie.


<hr />

<div align="center">
Happy Coding!
</div>
