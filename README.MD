# 🚀 CareerGuide AI

An AI-powered Career Guidance Assistant built using **Node.js**, **Express.js**, **Google Gemini AI**, **HTML**, **CSS**, and **JavaScript**.

CareerGuide AI helps students and professionals explore career paths, understand required skills, discover learning roadmaps, prepare for interviews, and receive personalized career guidance through conversational AI.

---

# 📌 Features

### 🤖 AI Career Counselor

* Career guidance
* Job role recommendations
* Career roadmap generation
* Skill recommendations
* Certification guidance
* Interview preparation tips
* Resume suggestions

### 🎯 Student Guidance

* Higher studies recommendations
* Entrance exam guidance
* Career transition advice
* Technology learning roadmaps

### 💬 AI Chat Interface

* Real-time conversation
* Gemini AI integration
* Responsive UI
* Modern chat experience

### ⚡ Backend Features

* REST API architecture
* Express.js server
* Environment variable security
* Modular code structure

---

# 🛠️ Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript (ES6)

## Backend

* Node.js
* Express.js

## AI Integration

* Google Gemini 2.5 Flash
* @google/genai SDK

## Development Tools

* VS Code
* Git
* GitHub
* Postman

---

# 📂 Project Structure

```text
CareerGuide_AI/
│
├── controllers/
│   └── chatController.js
│
├── routes/
│   └── chat.js
│
├── services/
│   └── geminiService.js
│
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── app.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# ⚙️ Prerequisites

Install the following software before running the project:

* Node.js (v20+ Recommended)
* npm
* Git
* Visual Studio Code

Verify Installation:

```bash
node -v
npm -v
git --version
```

---

# 📥 Installation

## Step 1: Clone Repository

```bash
git clone https://github.com/your-username/CareerGuide_AI.git
```

Move into project folder:

```bash
cd CareerGuide_AI
```

---

## Step 2: Install Dependencies

```bash
npm install
```

Installed packages include:

* Express
* Dotenv
* Gemini SDK
* Nodemon

---

## Step 3: Create Environment Variables

Create a file named:

```env
.env
```

Add:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
PORT=3000
```

---

## Step 4: Generate Gemini API Key

1. Open Google AI Studio
2. Sign in with Google
3. Create API Key
4. Copy API Key
5. Paste inside `.env`

Example:

```env
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

---

# ▶️ Running the Application

## Development Mode

```bash
npm run dev
```

Expected Output:

```bash
Server running on port 3000
```

---

## Production Mode

```bash
npm start
```

---

# 🌐 Open Application

Visit:

```text
http://localhost:3000
```

You should see the CareerGuide AI homepage.

---

# 🔄 Application Workflow

```text
User
 │
 ▼
Frontend UI
 │
 ▼
Fetch API Request
 │
 ▼
Express Route
 │
 ▼
Controller
 │
 ▼
Gemini Service
 │
 ▼
Google Gemini API
 │
 ▼
AI Response
 │
 ▼
Frontend Chat Window
```

---

# 📡 API Documentation

## Chat Endpoint

### URL

```http
POST /api/chat
```

---

### Request Body

```json
{
  "message": "How do I become an AI Engineer?"
}
```

---

### Successful Response

```json
{
  "success": true,
  "reply": "AI Engineer roadmap..."
}
```

---

### Error Response

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

# 📜 Available Scripts

## Start Development Server

```bash
npm run dev
```

Uses Nodemon for auto restart.

---

## Start Production Server

```bash
npm start
```

Runs:

```bash
node server.js
```

---

## Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

| Variable       | Description           |
| -------------- | --------------------- |
| GEMINI_API_KEY | Google Gemini API Key |
| PORT           | Server Port           |

Example:

```env
GEMINI_API_KEY=YOUR_KEY
PORT=3000
```

---

# 🚀 Deployment

## Deploy Backend on Render

### 1. Push Code to GitHub

```bash
git add .
git commit -m "Initial Commit"
git push origin main
```

---

### 2. Create Render Account

Sign up on Render.

---

### 3. Create Web Service

Select:

```text
New Web Service
```

Connect your GitHub repository.

---

### 4. Configure

Build Command:

```bash
npm install
```

Start Command:

```bash
npm start
```

---

### 5. Add Environment Variables

```env
GEMINI_API_KEY=YOUR_API_KEY
PORT=3000
```

---

### 6. Deploy

Render generates:

```text
https://your-app.onrender.com
```

---

# 🌍 Deploy Frontend on Vercel

Install CLI:

```bash
npm install -g vercel
```

Login:

```bash
vercel login
```

Deploy:

```bash
vercel
```

Follow terminal instructions.

---

# 🐙 GitHub Setup

Initialize Repository:

```bash
git init
```

Add Files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial Commit"
```

Connect Remote:

```bash
git remote add origin https://github.com/your-username/CareerGuide_AI.git
```

Push:

```bash
git push -u origin main
```

---

# 🐛 Troubleshooting

## API Key Error

```text
API_KEY_INVALID
```

### Solution

* Verify API key
* Regenerate API key
* Update `.env`

---

## Port Already In Use

```text
EADDRINUSE
```

### Solution

Change:

```env
PORT=5000
```

---

## Route Not Found

```text
404 Not Found
```

Verify:

```javascript
app.use("/api/chat", chatRoutes);
```

---

## Gemini Quota Exceeded

```text
429 RESOURCE_EXHAUSTED
```

### Solution

* Wait for quota reset
* Use another API key
* Upgrade Gemini plan

---

# 🔮 Future Enhancements

### Frontend

* React.js
* React Router
* Tailwind CSS
* Dark/Light Theme

### Backend

* Authentication
* JWT
* MongoDB

### AI Features

* Chat History
* Resume Analyzer
* Interview Simulator
* Career Assessment Test
* RAG Integration
* PDF Upload Analysis
* Voice Assistant

---

# 👨‍💻 Author

**Arya Abhirvey**

Built as a Full Stack Generative AI Internship Project using Express.js and Google Gemini AI.

---

# 📄 License

MIT License

Feel free to use, modify, and distribute this project for educational and personal learning purposes.
