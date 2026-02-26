# Eatelligence

Eatelligence is a prototype food-planning app for a school project.  
It combines meal planning, nutrition awareness, and spending tracking.

## Features

- Smart budget tracking
- Nutrition tracking
- “Surprise me” nearby food recommendation (prototype)

> This project is **not fully functional** and is intended for learning/demo purposes.

## Tech Stack

### Frontend
- React
- Vite
- ESLint

### Backend
- Java
- Maven
- Docker Compose (local services)

## Repository Structure

- Frontend app: [frontend/](frontend/)
  - Entry: [frontend/src/main.jsx](frontend/src/main.jsx)
  - Root component: [frontend/src/App.jsx](frontend/src/App.jsx)
  - Styles: [frontend/src/index.css](frontend/src/index.css)
  - Components: [frontend/src/components/](frontend/src/components/)
  - Pages: [frontend/src/pages/](frontend/src/pages/)
  - Config: [frontend/vite.config.js](frontend/vite.config.js), [frontend/eslint.config.js](frontend/eslint.config.js), [frontend/package.json](frontend/package.json)

- Backend app: [backend/](backend/)
  - Maven config: [backend/pom.xml](backend/pom.xml)
  - Source: [backend/src/main/java/](backend/src/main/java/)
  - Resources: [backend/src/main/resources/](backend/src/main/resources/)
  - Tests: [backend/src/test/java/](backend/src/test/java/)
  - Local services: [backend/docker-compose.yml](backend/docker-compose.yml)

## Getting Started

## Prerequisites

- Node.js (LTS recommended)
- npm
- Java 17+ (or version required by [backend/pom.xml](backend/pom.xml))
- Docker Desktop (optional, for [backend/docker-compose.yml](backend/docker-compose.yml))

## Frontend (Vite + React)

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

5. Lint:
   ```bash
   npm run lint
   ```

## Backend (Maven)

1. Run tests:
   ```bash
   cd backend
   ./mvnw test
   ```
   On Windows:
   ```bash
   mvnw.cmd test
   ```

2. Run the app:
   ```bash
   ./mvnw spring-boot:run
   ```
   On Windows:
   ```bash
   mvnw.cmd spring-boot:run
   ```

3. Build:
   ```bash
   ./mvnw clean package
   ```

## Notes

- Frontend static assets: [frontend/public/](frontend/public/)
- Backend build output: [backend/target/](backend/target/)
- Workspace settings: [.vscode/settings.json](.vscode/settings.json)