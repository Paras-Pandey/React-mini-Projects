import "./App.css";
import Todo from "./To-do/toDo";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";
import FetchGithubRepoDetails from "./fetchGithubRepoDetails/fetchGithubRepoDetails";
import GetBlogDetails from "./getBlogDetails/getBlogDetails";

function App() {
  function Button() {
    const { data, error } = useQuery(
      "first-query",
      () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(Math.random()), 2000);
        });
      },
      { enabled: status },
    );

    return <button>{data}</button>;
  }
  const [visibility, setVisibility] = useState(true);
  const [status, setStatus] = useState(false);

  function toggleVisibility() {
    setVisibility((oldVisibility) => !oldVisibility);
  }

  function toggleStatus() {
    setStatus((oldStatus) => !oldStatus);
  }

  return (
    <BrowserRouter>
      <div className="App">
        {visibility && <Button />}
        <button onClick={toggleVisibility}>Toggle Visibility</button>
        <button onClick={toggleStatus}>Toggle Status</button>
        <nav>
          <ul>
            <li>
              <Link to="/todo/Paras">To-do</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fetchGithubRepoDetails">
                Fetch Github Repo Details
              </Link>
            </li>
            <li>
              <Link to="/getBlogDetails">Get Blog Details</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/todo/:username" element={<Todo />} />
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route
            path="/fetchGithubRepoDetails"
            element={<FetchGithubRepoDetails />}
          />
          <Route path="/getBlogDetails" element={<GetBlogDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
