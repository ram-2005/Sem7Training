import { useEffect, useState } from "react";
import "./Task4.css";

function Task4() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="task4">
      <header className="task4-header">
        <p className="task4-label">TASK 04</p>

        <h1>Dynamic User List</h1>

        <p>
          This task demonstrates map(), unique keys, and useEffect().
        </p>
      </header>

      <main className="task4-main">
        <section className="task4-info">
          <h2>Users</h2>

          <p>
            The users below are loaded from a public API when this
            component mounts.
          </p>
        </section>

        {loading && (
          <div className="task4-message">
            Loading users...
          </div>
        )}

        {error && (
          <div className="task4-error">
            Error: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="user-grid">
            {users.map((user) => (
              <div className="user-card" key={user.id}>
                <div className="user-number">
                  {user.id}
                </div>

                <div>
                  <h3>{user.name}</h3>

                  <p>
                    <strong>Username:</strong>{" "}
                    {user.username}
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    {user.email}
                  </p>

                  <p>
                    <strong>City:</strong>{" "}
                    {user.address.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Task4;
