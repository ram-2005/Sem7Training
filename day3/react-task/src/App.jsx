import { useState } from "react";

import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4";
import Task5 from "./tasks/Task5";
import Task6 from "./tasks/Task6";

import "./App.css";

function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  // =========================
  // TASK PAGES
  // =========================

  if (selectedTask === 1) {
    return (
      <div className="task-page">
        <button
          className="back-button"
          onClick={() => setSelectedTask(null)}
        >
          ← Back to Tasks
        </button>

        <Task1 />
      </div>
    );
  }

  if (selectedTask === 2) {
    return (
      <div className="task-page">
        <button
          className="back-button"
          onClick={() => setSelectedTask(null)}
        >
          ← Back to Tasks
        </button>

        <Task2 />
      </div>
    );
  }

  if (selectedTask === 3) {
    return (
      <div className="task-page">
        <button
          className="back-button"
          onClick={() => setSelectedTask(null)}
        >
          ← Back to Tasks
        </button>

        <Task3 />
      </div>
    );
  }

  if (selectedTask === 4) {
    return (
      <div className="task-page">
        <button
          className="back-button"
          onClick={() => setSelectedTask(null)}
        >
          ← Back to Tasks
        </button>

        <Task4 />
      </div>
    );
  }

  if (selectedTask === 5) {
    return (
      <div className="task-page">
        <button
          className="back-button"
          onClick={() => setSelectedTask(null)}
        >
          ← Back to Tasks
        </button>

        <Task5 />
      </div>
    );
  }

  if (selectedTask === 6) {
    return (
      <div className="task-page">
        <button
          className="back-button"
          onClick={() => setSelectedTask(null)}
        >
          ← Back to Tasks
        </button>

        <Task6 />
      </div>
    );
  }

  // =========================
  // MAIN DASHBOARD
  // =========================

  return (
    <div className="dashboard">

      {/* =========================
          HEADER
      ========================= */}

      <header className="dashboard-header">

        <div>
          <p className="dashboard-label">
            REACT DEVELOPMENT
          </p>

          <h1>
            React Tasks
          </h1>

          <p className="dashboard-description">
            A collection of React exercises and implementations.
          </p>
        </div>

        {/* Profile */}

        <div className="profile">

          <div className="profile-avatar">
            H
          </div>

          <div>
            <p className="profile-name">
              Hanuram P R
            </p>

            <p className="profile-role">
              Computer Science Student
            </p>
          </div>

        </div>

      </header>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="dashboard-content">

        {/* Section heading */}

        <div className="section-heading">

          <div>
            <h2>
              Tasks
            </h2>

            <p>
              Select a task to view its implementation.
            </p>
          </div>

          <span className="task-count">
            6 Tasks
          </span>

        </div>

        {/* =========================
            TASK GRID
        ========================= */}

        <div className="task-grid">

          {/* =========================
              TASK 1
          ========================= */}

          <button
            className="task-card"
            onClick={() => setSelectedTask(1)}
          >
            <div className="task-number">
              01
            </div>

            <div className="task-card-content">

              <h3>
                React Components & JSX
              </h3>

              <p>
                Create a React page using multiple
                components and JSX elements.
              </p>

              <span className="task-link">
                Open Task →
              </span>

            </div>
          </button>

          {/* =========================
              TASK 2
          ========================= */}

          <button
            className="task-card"
            onClick={() => setSelectedTask(2)}
          >
            <div className="task-number">
              02
            </div>

            <div className="task-card-content">

              <h3>
                Reusable Components with Props
              </h3>

              <p>
                Create reusable components and pass
                different values using props.
              </p>

              <span className="task-link">
                Open Task →
              </span>

            </div>
          </button>

          {/* =========================
              TASK 3
          ========================= */}

          <button
            className="task-card"
            onClick={() => setSelectedTask(3)}
          >
            <div className="task-number">
              03
            </div>

            <div className="task-card-content">

              <h3>
                State, Events & Controlled Input
              </h3>

              <p>
                Build an interactive search box using
                React state and controlled input.
              </p>

              <span className="task-link">
                Open Task →
              </span>

            </div>
          </button>

          {/* =========================
              TASK 4
          ========================= */}

          <button
            className="task-card"
            onClick={() => setSelectedTask(4)}
          >
            <div className="task-number">
              04
            </div>

            <div className="task-card-content">

              <h3>
                Dynamic Lists & useEffect
              </h3>

              <p>
                Render dynamic data using map() and
                demonstrate useEffect with an API.
              </p>

              <span className="task-link">
                Open Task →
              </span>

            </div>
          </button>

          {/* =========================
              TASK 5
          ========================= */}

          <button
            className="task-card"
            onClick={() => setSelectedTask(5)}
          >
            <div className="task-number">
              05
            </div>

            <div className="task-card-content">

              <h3>
                React Forms
              </h3>

              <p>
                Build a controlled form using state,
                onChange, and onSubmit.
              </p>

              <span className="task-link">
                Open Task →
              </span>

            </div>
          </button>

          {/* =========================
              TASK 6
          ========================= */}

          <button
            className="task-card"
            onClick={() => setSelectedTask(6)}
          >
            <div className="task-number">
              06
            </div>

            <div className="task-card-content">

              <h3>
                Routing, Tailwind & Responsive UI
              </h3>

              <p>
                Build a multi-page interface using
                React Router and Tailwind CSS.
              </p>

              <span className="task-link">
                Open Task →
              </span>

            </div>
          </button>

        </div>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="dashboard-footer">
        <p>
          React Training • Hanuram P R • 2026
        </p>
      </footer>

    </div>
  );
}

export default App;
