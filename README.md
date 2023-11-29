<div align="center">
    <img src="https://raw.githubusercontent.com/micaellimedeiros/easy-generator/10da56ddd540fca2453c96cd7bd9a413366b41f1/web/src/assets/logo.svg" />
</div>

# EasyGenerator

EasyGenerator is a full-stack web application for [provide a brief description of your application].

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Features
- **User Authentication:**
  - Sign up and sign in functionality.
  - Password requirements: Minimum length of 8 characters, at least 1 letter, 1 number, and 1 special character.
  - 
- **Frontend Development:**
  - Developed using React with TypeScript.
  - User authentication module with React Hook Form for signup and login forms.
  - Beautiful design elements with Styled Components.
  - 
- **Backend Development:**
  - Implemented with NestJS framework.
  - MongoDB integrated as the database.
  - JWT-based authentication.
  - 
- **Security and Best Practices:**
  - Implemented logging on the backend.
  - Followed security best practices.

## Technologies Used
- Frontend:
  - React
  - TypeScript
  - Styled Components
  - React Hook Form
  - React Router Dom
    
- Backend:
  - NestJS
  - MongoDB
  - Mongoose
  - JWT
  - TypeScript
    
- Other:
  - Axios

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/micaellimedeiros/easy-generator.git
   cd easy-generator

# Install frontend dependencies
    cd web
    yarn install

# Install backend dependencies
    cd ../api
    yarn install

# Run docker compose
    docker-compose up -d
