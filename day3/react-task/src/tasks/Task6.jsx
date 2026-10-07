import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        Welcome Home
      </h2>

      <p className="mt-4 text-gray-600">
        This is the home page of the React Router application.
      </p>
    </div>
  );
}

function Items() {
  const items = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "React Router",
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900">
        Items
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {item}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              A technology used in modern web development.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900">
        Form
      </h2>

      <form className="mt-6 max-w-lg space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function Task6() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">

        {/* Navigation */}
        <nav className="border-b bg-gray-900 text-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">

            <h1 className="text-xl font-bold">
              React App
            </h1>

            <div className="flex gap-2">
              <Link
                to="/"
                className="rounded-lg px-4 py-2 text-sm hover:bg-gray-700"
              >
                Home
              </Link>

              <Link
                to="/items"
                className="rounded-lg px-4 py-2 text-sm hover:bg-gray-700"
              >
                Items
              </Link>

              <Link
                to="/form"
                className="rounded-lg px-4 py-2 text-sm hover:bg-gray-700"
              >
                Form
              </Link>
            </div>

          </div>
        </nav>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-5 py-10">

          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/items"
              element={<Items />}
            />

            <Route
              path="/form"
              element={<FormPage />}
            />
          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default Task6;
