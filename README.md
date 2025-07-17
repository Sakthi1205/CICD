# 🚀 CI/CD Pipeline for Web Application using GitHub Actions & Docker

This project demonstrates a complete CI/CD (Continuous Integration / Continuous Deployment) pipeline for a sample web application. The pipeline uses **GitHub Actions** to build and push a Docker image to **Docker Hub** automatically on every code push.

---

## 📌 Project Purpose

To automate the process of:
- Building the web application
- Creating a Docker image
- Pushing it to Docker Hub
- (Optional) Deploying it to a production environment

This reduces manual errors, speeds up the delivery process, and mimics real-world DevOps practices.

---

## 🧰 Tech Stack

| Tool            | Description                              |
|------------------|------------------------------------------|
| HTML/CSS/JS or React | Frontend web application               |
| Node.js / Flask  | Backend server (optional or customizable) |
| Docker           | Containerization of the app              |
| GitHub Actions   | CI/CD automation                         |
| Docker Hub       | Container image registry                 |

---

## 🛠️ Features

- 🚀 **CI/CD with GitHub Actions** – Build and push Docker image on every push to `main`
- 🐳 **Dockerized Web App** – Consistent environments across development and production
- 📦 **Docker Hub Integration** – Stores and manages application images
- 🧪 **Easy to Extend** – Can be connected to AWS/GCP/Azure for full deployment

---

## 📂 Folder Structure
guess-game/
│
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions for CI/CD
│
├── backend/
│   ├── Dockerfile            # Backend Dockerfile
│   ├── .dockerignore
│   ├── server.js             # Node.js backend logic
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── Dockerfile            # Frontend Dockerfile (HTML/CSS/JS)
│   ├── .dockerignore
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── docker-compose.yml        # Compose file to run both services

🚀 Running Locally
# Build the Docker image
docker build -t your-app-name .

# Run the container
docker run -p 8080:80 your-app-name

🌐 Real-World Use Case
In companies like Amazon, Swiggy, or Zomato, such CI/CD pipelines are used to:

Push feature updates quickly

Automate testing and deployment

Maintain uptime with safe rollbacks
