import react, { useState, useEffect } from "react";

let globalId = 0;

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  }

  function deleteTodo(idToDelete) {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== idToDelete));
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
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.todo}</li>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
