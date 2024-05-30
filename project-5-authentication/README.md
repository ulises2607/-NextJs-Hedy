# Next.js 14 Project with Tailwind CSS and Authentication using Supabase

## Description

This project is an application built with Next.js 14 that requires users to log in to access specific information and functionalities. It uses Tailwind CSS for design and Supabase with the GitHub provider for authentication. The application is designed to demonstrate a secure system for authentication and session management, with mandatory functionalities such as new user registration and login for existing users.

## Features

- **Next.js 14**: A React framework for building fast and scalable web applications.
- **Tailwind CSS**: A CSS framework for creating responsive and stylish designs.
- **Supabase**: A backend-as-a-service platform used for authentication and database management.
- **GitHub Authentication**: Users can register and log in using their GitHub accounts.

## Requirements

- **Do not store sensitive data without encryption on the client-side**: Passwords, session tokens, and other sensitive data are not stored without encryption.
- **Separation of front-end and back-end responsibilities**: Clear separation of responsibilities between the frontend and backend.

## Technologies Used

- **Next.js 14**
- **Tailwind CSS**
- **Supabase**
- **GitHub OAuth Provider**

## Installation and Setup

### Prerequisites

- Node.js (recommended LTS version)
- Supabase account
- GitHub account

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Set .env.local file**

```
NEXT_PUBLIC_SUPABASE_URL=https://nrvdpwnynfzxduhavksq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ydmRwd255bmZ6eGR1aGF2a3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MDE3MjcsImV4cCI6MjAzMTk3NzcyN30.RDCvLpeYksFOv9CQD9fbzco4EYrM2iKw6aoCYR9Ytb8


```
