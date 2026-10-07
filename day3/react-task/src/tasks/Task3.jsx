import { useState } from "react";
import "./Task3.css";

function Task3() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="task3">
      <header className="task3-header">
        <p className="task3-label">TASK 03</p>

        <h1>Interactive Search</h1>

        <p>
          This task demonstrates React state, events, and controlled inputs.
        </p>
      </header>

      <main className="task3-main">
        <section className="search-card">
          <label htmlFor="search">
            Search
          </label>

          <input
            id="search"
            type="text"
            placeholder="Type something..."
            value={searchValue}
            onChange={handleSearch}
          />

          <div className="search-result">
            <p>Your entered value:</p>

            <h2>
              {searchValue || "Start typing..."}
            </h2>
          </div>
        </section>

        <section className="state-info">
          <h2>Current State</h2>

          <code>
            searchValue = "{searchValue}"
          </code>
        </section>
      </main>
    </div>
  );
}

export default Task3;
