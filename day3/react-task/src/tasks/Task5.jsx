import { useState } from "react";
import "./Task5.css";

function Task5() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    location: "",
    status: "Active",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedData(formData);
  }

  return (
    <div className="task5">
      <header className="task5-header">
        <p className="task5-label">TASK 05</p>

        <h1>React Form</h1>

        <p>
          Create and submit a controlled form using React state.
        </p>
      </header>

      <main className="task5-main">
        <section className="form-card">
          <h2>Add Record</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Category / Role</label>

              <input
                id="role"
                name="role"
                type="text"
                value={formData.role}
                onChange={handleChange}
                placeholder="e.g. Frontend Developer"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>

              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Chennai"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>

              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <button
              className="submit-button"
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>

        {submittedData && (
          <section className="submitted-card">
            <h2>Submitted Information</h2>

            <div className="submitted-item">
              <span>Name</span>
              <strong>{submittedData.name}</strong>
            </div>

            <div className="submitted-item">
              <span>Category / Role</span>
              <strong>{submittedData.role}</strong>
            </div>

            <div className="submitted-item">
              <span>Location</span>
              <strong>{submittedData.location}</strong>
            </div>

            <div className="submitted-item">
              <span>Status</span>
              <strong>{submittedData.status}</strong>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Task5;
