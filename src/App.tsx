import "./App.css";
import Todo from "./To-do/toDo";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";

function Button() {
  const { data, error } = useQuery("first-query", () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(Math.random()), 2000);
    });
  });

  return <button>{data}</button>;
}

function App() {
  const [visibility, setVisibility] = useState(true);

  function toggleVisibility() {
    setVisibility((oldVisibility) => !oldVisibility);
  }

  return (
    <BrowserRouter>
      <div className="App">
        {visibility && <Button />}
        <button onClick={toggleVisibility}>Toggle Visibility</button>
        <nav>
          <ul>
            <li>
              <Link to="/todo/Paras">To-do</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/todo/:username" element={<Todo />} />
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
