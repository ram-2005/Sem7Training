import "./Task1.css";

function Header() {
  return (
    <header className="task1-header">
      <h1>My React Page</h1>

      <nav>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </nav>
    </header>
  );
}

function WelcomeMessage() {
  return (
    <main className="task1-main">
      <section className="welcome-section">
        <h2>Welcome to React!</h2>

        <p>
          This is a basic React page created using multiple components and
          JSX.
        </p>

        <button className="primary-button">Get Started</button>
      </section>

      <section className="info-section">
        <h2>About This Page</h2>

        <p>
          React allows us to build user interfaces using reusable components.
        </p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="task1-footer">
      <p>&copy; 2026 My React Page. All rights reserved.</p>
    </footer>
  );
}

function Task1() {
  return (
    <div className="task1">
      <Header />
      <WelcomeMessage />
      <Footer />
    </div>
  );
}

export default Task1;
