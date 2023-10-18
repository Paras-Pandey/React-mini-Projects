import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

let globalId = 0;

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const { username } = useParams();

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
      <h1>To-dos for {username}</h1>
      <p>Add new To-dos</p>
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
