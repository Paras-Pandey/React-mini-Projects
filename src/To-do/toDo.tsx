import react, { useState, useEffect } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, task];
    });
  }

  return (
    <div>
      <h1>To-do</h1>
      <p>Add your To-dos</p>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button type="submit">Create To-do</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
