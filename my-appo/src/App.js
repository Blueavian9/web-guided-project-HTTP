import { useState } from "react";
import "./App.css";

const todos = [
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

function App() {
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button>submit</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <span className={todo.IsDone ? "done" : ""}>{todo.description}</span>
          <span>
            <button>{todo.isDone ? "Delete" : "Complete"}</button>
          </span>
        </div>
      ))}
    </div>
  );
}
