import React, { useEffect, useState } from "react";
import "./App.css";
import App from "./App";

const newTodos = [
  {
    id: 1,
    description: "say hello",
    isDone: false,
  },
  {
    id: 2,
    description: "say hello again",
    isDone: false,
  },
];

const [todos, setTodos] = useState([]);
const [todo, setTodo] = useState("");

useEffect(() => {
  getData();
}, []);

const getData = () => {
  getTodos().then((res) => {
    setTodos(res);
  });
};

const addTodo = () => {
  console.log("hello");
  postTodo(todo).then(() => {
    getData();
  });
};

const completeTodo = (todo) => {
  const newTodo = { ...todo, isDone: true };
  putTodo(newTodo).then(() => {
    getData();
  });
};

const deleteTodoItem = (id) => {
  deleteTodo(id).then(() => {
    getData();
  });
};

const App() => {};
return (
  <div className="App">
    <input value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button onClick={() => addTodo()}>submit</button>
    {todos.map((todo, index) => (
      <div key={index}>
        <span className={todo.IsDone ? "done" : ""}>{todo.description}</span>
        <span>
          {todo.isDone ? (
            <button onClickCapture={() => DeleteTodoItems(todo.id)}>Delete</button>
          ) : (
            <button onClick={() => completeTodo(todo)}>Complete</button>
          )}
        </span>
      </div>
    ))}
  </div>
);
export default App();
