# 📝 MERN Task Manager

A simple **Task Manager App** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
This project demonstrates full-stack development with CRUD operations, connecting a React frontend to an Express + MongoDB backend.

---

## 🚀 Features
- ➕ Add new tasks with title and description  
- ✅ Mark tasks as completed / undo completion  
- ❌ Delete tasks  
- 📅 Auto-saves with timestamp  
- 🎨 Simple, clean UI built in React  
- 🌐 RESTful API with Express + MongoDB  

---

## 🛠️ Tech Stack
- **Frontend:** React (Create React App)  
- **Backend:** Node.js + Express  
- **Database:** MongoDB (Atlas or Local)  
- **Other Tools:** Mongoose, CORS, dotenv, Nodemon  

---

## 📂 Project Structure



mern-task/ 
├─ server/               # Backend (Express + MongoDB)
│  
├─ models/Task.js     # Mongoose schema 
│ 
├─ routes/tasks.js    # Task API routes
│ 
├─ server.js          # Main server file 
│  
└─ .env               # Environment variables 
└─ client/               # Frontend (React)
├─ src/components/    # React components (TaskForm, TaskList, TaskItem) 
└─ src/App.js         # Main React app


📌 API Endpoints

Method	Endpoint	Description

GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a task (toggle)
DELETE	/api/tasks/:id	Delete a task



