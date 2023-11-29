<div align="center">
    <img src="https://raw.githubusercontent.com/micaellimedeiros/easy-generator/10da56ddd540fca2453c96cd7bd9a413366b41f1/web/src/assets/logo.svg" />
</div>

EasyGenerator is a modern full-stack web application that provides seamless user authentication using React on the frontend and NestJS on the backend. It features an intuitive design, robust security measures, and follows best practices for an optimal user experience.

<div align="center">
    <img src="https://github.com/micaellimedeiros/easy-generator/assets/54600663/6783706f-1803-4800-b249-f9460f44e442" width="70%" />
</div>

<hr />

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
    
- **Frontend Development:**
  - Developed using React with TypeScript.
  - User authentication module with React Hook Form for signup and login forms.
  - Beautiful design elements with Styled Components.
    
- **Backend Development:**
  - Implemented with NestJS framework.
  - MongoDB integrated as the database.
  - JWT-based authentication.
    

## Technologies Used
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

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:

        git clone https://github.com/micaellimedeiros/easy-generator.git
        cd easy-generator

# Run docker compose
    docker-compose up -d

# Install backend dependencies
    cd api
    yarn install
    yarn start:dev

# Install frontend dependencies
    cd ../web
    yarn install
    yarn dev
