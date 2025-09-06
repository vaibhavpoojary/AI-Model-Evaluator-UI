AI Model Evaluator
Project Info

AI Model Evaluator is a web-based dashboard for monitoring, analyzing, and improving AI/LLM model performance.
It provides detailed metrics, visualization of evaluation results, weak segment analysis, and supports version-to-version comparisons for continuous improvement.

<img width="1277" height="911" alt="image" src="https://github.com/user-attachments/assets/b9ed312b-1f33-4ad3-8721-693c36f20814" />

Getting Started
Prerequisites

Make sure you have the following installed:

Node.js (use nvm
 for easy installation and version management)

npm or yarn package manager

Setup Instructions
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the dependencies
npm install

# Step 4: Start the development server
npm run dev


The app will start with hot reloading enabled. Open the provided local URL in your browser to preview the dashboard.

Editing the Project

You can edit the project using:

Your preferred IDE (e.g., VS Code, WebStorm)

GitHub web editor: Navigate to any file and use the inline editor

GitHub Codespaces: Launch a cloud-based IDE directly from GitHub

Tech Stack

This project is built using:

Vite – Fast build tool and dev server

TypeScript – Type-safe JavaScript

React – Frontend UI framework

shadcn-ui – Prebuilt accessible UI components

Tailwind CSS – Utility-first styling

Deployment

You can deploy this project using your preferred service:

Vercel

Netlify

AWS Amplify

GitHub Pages

Once deployed, you can connect a custom domain via your hosting provider’s settings.

Features

📊 Overall Model Score with breakdown by correctness, relevance, completeness, etc.

📂 Topic-wise Distribution of evaluation samples

🧩 Property Metrics: correctness, completeness, fluency, toxicity, sentiment, hallucination score, bias/fairness, latency

🔎 Weak Segment Analysis to identify failure patterns

📈 Trends & Comparisons across versions

📝 Detailed Evaluation Table with filtering and annotations

📤 Export Reports to PDF, CSV, XLSX

🌙 Dark Mode support

Future Enhancements

Multi-model comparison dashboards

Advanced filtering with dataset-level analysis

Real-time evaluation integration via APIs

Collaboration features with comments and annotations
