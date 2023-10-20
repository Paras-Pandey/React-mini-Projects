import "./App.css";
import Todo from "./To-do/toDo";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FetchGithubRepoDetails from "./fetchGithubRepoDetails/fetchGithubRepoDetails";
import GetBlogDetails from "./getBlogDetails/getBlogDetails";
import Stopwatch from "./stopwatch/stopwatch";
import IncrementCounter from "./incrementCounter/incrementCounter";
import ParentComponent from "./setDarkOrLightTheme/parentComponent";
import ToggleButton from "./toggleButton/toggleButton";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
            <li>
              <Link to="/stopwatch">Stopwatch</Link>
            </li>
            <li>
              <Link to="/incrementCounter">Increment Counter</Link>
            </li>
            <li>
              <Link to="/setDarkOrLightTheme">Set Dark Or Light Theme</Link>
            </li>
            <li>
              <Link to="/toggleButton">Toggle Button</Link>
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
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/incrementCounter" element={<IncrementCounter />} />
          <Route path="/setDarkOrLightTheme" element={<ParentComponent />} />
          <Route path="/toggleButton" element={<ToggleButton />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
