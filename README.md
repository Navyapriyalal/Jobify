# Jobify – Job Tracking Application

Jobify is a simple and efficient job-tracking application that helps users log job applications, monitor progress, and stay organized throughout their job search. It provides a smooth interface, reliable backend, and useful analytics to make tracking effortless.

---

## Features

- Secure user authentication (JWT-based)
- Add, edit, delete, and track job applications
- Status categories like Pending, Interview, Declined, etc.
- Search and filter functionality
- Dashboard with monthly application statistics
- Responsive and modern UI

---

## 🛠 Tech Stack

### Frontend
- React  
- React Router  
- TailwindCSS / Styled Components  

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Navyapriyalal/Jobify.git
cd jobify
```

### 2. Install dependencies
Backend:
```bash
npm install
```
Frontend:
```bash
cd client
npm install
```

### 3. Environment Variables
In the server folder create a .env file:
```bash
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_LIFETIME=1d
PORT=5000
```

### 4. Run the Application
```bash
npm run dev
```