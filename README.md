# 🚀 CI/CD Pipeline for Web Application using GitHub Actions & Docker
This project showcases a complete DevOps workflow by implementing a CI/CD pipeline for a simple guessing game web app. It automates the process of building, containerizing, and deploying using GitHub Actions, Docker, and Docker Hub.

# 🎯 Purpose of the Project
In real-world software teams, automation is essential to:

Accelerate software delivery

Ensure consistency across environments

Minimize human errors

Allow seamless collaboration across teams

**This project simulates a production-grade workflow where:**

Developers push code to GitHub

The CI/CD pipeline automatically builds and pushes Docker images

These images can be instantly pulled and deployed across any environment or server

# 🧰 Tech Stack & Tools
| Tool / Tech           | Purpose                              |
| --------------------- | ------------------------------------ |
| **HTML, CSS, JS**     | Lightweight frontend (no frameworks) |
| **Node.js (Express)** | Backend logic for the guessing game  |
| **Docker**            | Containerize backend and frontend    |
| **Docker Compose**    | Run multi-container app locally      |
| **Docker Hub**        | Store & distribute container images  |
| **GitHub Actions**    | Automate CI/CD process               |


# ✨ Key Features
✅ GitHub Actions for CI/CD: Auto-build and push Docker images on each commit to main

🐳 Dockerized Services: Ensures consistent runtime across all environments

📤 Docker Hub Publishing: Makes images easily deployable anywhere

🔄 Multi-device Access: App accessible from any device on the same network

🔧 Modular Architecture: Backend and frontend can be scaled or modified independently

# 📂 Folder Structure
<img width="678" height="337" alt="image" src="https://github.com/user-attachments/assets/c7c9cab1-12fb-4b34-9063-c01844d96db0" />

# 🚀 Workflow: How It Works
User opens the guessing game in a browser.

Enters a number → frontend sends it to backend API.

Backend compares with a random number and responds:

Too low! Try again You can.

Too high! Try again You can.

Correct! 🎉

Responses are displayed dynamically via JavaScript frontend.

# 🧪 CI/CD Pipeline with GitHub Actions
**Trigger:** 
Push to main branch

**Actions:**

Checkout code

Build Docker images for both frontend and backend

Log in to Docker Hub

**Push updated images:**

sakthi05/guess-game-frontend

sakthi05/guess-game-backend

SSH and redeploy on production server

# 🐳 Docker Usage
**🚀 Run Locally with Docker Compose**

docker-compose down

docker-compose up --build

**🔄 Git changes**

git status

git add .

git commit -m "Updated game logic message responses"

git push


**📦 Pull and run images elsewhere**

**✅ Backend**

docker pull sakthi05/guess-game-backend

docker run -p 5000:5000 sakthi05/guess-game-backend

**✅ Frontend**

docker pull sakthi05/guess-game-frontend

docker run -p 3000:80 sakthi05/guess-game-frontend


# 🌐 Real-World Use Case & Benefits
| Scenario                        | Value Delivered                            |
| ------------------------------- | ------------------------------------------ |
| Frequent code updates           | Auto-build & deploy – no manual steps      |
| Shared dev/testing environments | Consistent images from Docker Hub          |
| Faster feedback loop            | Changes visible immediately after push     |
| Learning DevOps practices       | Hands-on CI/CD pipeline & containerization |


# ✅ Outcomes
🚀 Hands-on with end-to-end DevOps lifecycle

👨‍💻 Built confidence in Docker, Docker Compose & GitHub Actions

🌐 Hosted app usable across devices with Docker

📦 Published to Docker Hub:

-sakthi05/guess-game-frontend

-sakthi05/guess-game-backend
