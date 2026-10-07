import "./Task2.css";

function JobCard({ title, organization, location, status }) {
  return (
    <div className="job-card">
      <h2>{title}</h2>

      <p>
        <strong>Organization:</strong> {organization}
      </p>

      <p>
        <strong>Location:</strong> {location}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span
          className={
            status === "Open" ? "job-status-open" : "job-status-closed"
          }
        >
          {status}
        </span>
      </p>

      <button>View Job</button>
    </div>
  );
}

function Task2() {
  return (
    <div className="task2">
      <header className="task2-header">
        <h1>Job Opportunities</h1>
        <p>Explore available jobs and internships.</p>
      </header>

      <main className="job-container">
        <JobCard
          title="Frontend Developer"
          organization="Google"
          location="Bangalore"
          status="Open"
        />

        <JobCard
          title="Backend Developer"
          organization="Microsoft"
          location="Hyderabad"
          status="Open"
        />

        <JobCard
          title="Data Science Intern"
          organization="Amazon"
          location="Chennai"
          status="Closed"
        />

        <JobCard
          title="Full Stack Developer"
          organization="Zoho"
          location="Chennai"
          status="Open"
        />
      </main>
    </div>
  );
}

export default Task2;
