# 🐒 Dev Quizzer

> **A fun and interactive quiz platform for developers!**

Dev Quizzer is a modern web application built with **Next.js**, **React**, **TypeScript**, and **Zustand** for state management. It offers a playful, banana-themed experience for testing and improving your programming knowledge.

Designed for extensibility and a delightful user experience, Dev Quizzer is a showcase of best practices in modern frontend development.

---

## 🚀 Scripts

-  `install` - Install all dependencies
-  `dev` - Start the development server
-  `build` - Build the app for production
-  `start` - Start the production server
-  `lint` - Run ESLint for code quality

---

## ⚙️ Tech Stack

| Tech                | Description                                      |
| ------------------- | ------------------------------------------------ |
| **Next.js**         | React framework for SSR, routing, and API routes |
| **React**           | UI library for building interactive interfaces   |
| **TypeScript**      | Typed superset of JavaScript                     |
| **Zustand**         | Lightweight state management                     |
| **React Hook Form** | Form state management and validation             |
| **Zod**             | TypeScript-first schema validation               |
| **MUI**             | Material UI component library                    |
| **Sass/SCSS**       | Modern CSS with variables and nesting            |

---

## 📂 Project Structure

```bash
├── public/                 # Static assets (SVGs, images, icons)
├── src/
│   ├── app/                # Next.js app directory (routing, pages, layout)
│   │   ├── (home)/         # Home page and landing components
│   │   ├── compose-quiz/   # Quiz composition page
│   │   ├── quiz/           # Quiz taking page
│   │   ├── results/        # Results and summary page
│   │   └── globals.css     # Global styles
│   ├── assets/             # Images and illustrations
│   ├── features/           # Feature modules (quiz, params, etc.)
│   │   ├── quiz/           # Quiz logic, API, hooks, UI
│   │   └── params/         # Quiz parameter selection
│   ├── shared/             # Shared UI, providers, schemas, types
│   └── utils/              # Utility functions
├── package.json            # Project metadata and scripts
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
└── README.md               # Project documentation
```

---

## ✨ Features

### 🏠 Home & Onboarding

-  **Hero section** with playful branding and banana-themed visuals
-  **How it works**: Step-by-step guide for new users
-  **API features**: Overview of quiz API capabilities

### 📝 Quiz Composition

-  **Custom quiz creation**: Select parameters (number of questions, difficulty, category)
-  **Form validation**: Built with React Hook Form and Zod
-  **Dynamic question generation**: Powered by backend API

### ❓ Quiz Experience

-  **Multiple question types**: Single and multiple choice
-  **Progress tracking**: Visual indicators for current question and completion
-  **Navigation**: Return back any time during the quiz
-  **Cache**: Don't scare to lose all your progress after page reload

### 🏆 Results & Review

-  **Detailed results page**: See your score, correct/incorrect answers, and explanations
-  **Banana counter**: Celebrate your achievements with banana-themed rewards
-  **Share results with friends**: Ready to download image with your personal results
-  **Answer breakdown**: Review each question and your responses

### 📦 State Management & Persistence

-  **Zustand**: Simple, scalable state management for quiz flow and answers
-  **Local storage**: Quiz progress and results are saved between sessions

### 🎨 UI/UX

-  **Material UI**: Consistent, accessible components
-  **Custom SCSS modules**: Modular, maintainable styles
-  **Responsive design**: Works great on desktop and mobile

### 🛠️ Developer Experience

-  **TypeScript everywhere**: Type safety for all logic and components
-  **ESLint**: Enforced code quality and style
-  **Modular architecture (Feature-Sliced Design)**: The project follows the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) methodology, organizing code by features, entities, shared components, and pages. This structure makes it easy to scale, maintain, and extend the app with new features or question types. Each feature is isolated, with its own UI, logic, and styles, promoting clear boundaries and reusability across the codebase.

---

## 🧩 Advanced Features

-  **API integration**: Fetches questions and parameters from a backend API
-  **Error handling**: User-friendly error messages for API/network issues
-  **Reusable components**: Step, Badge, Answer, and more
-  **Theming**: Easily switch or extend the app’s look and feel
