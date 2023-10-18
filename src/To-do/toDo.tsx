import react, { useState, useEffect } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo() {
    setTodos((oldTodos) => {
      return [...oldTodos, task];
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <p>Add your To-dos</p>
      <input
        type="text"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button onClick={createTodo}>Create To-do</button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
