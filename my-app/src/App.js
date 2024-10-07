import React, { useEffect, useState } from "react";
// import "./App.css"; // You don't need this if you're using Tailwind CSS

// Mock API functions for todos
const getTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, description: "say hello", isDone: false },
        { id: 2, description: "say hello again", isDone: false },
      ]);
    }, 500);
  });
};

const postTodo = (newTodo) => {
  return new Promise((resolve) => {
    console.log("Posting new todo:", newTodo);
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

const putTodo = (updatedTodo) => {
  return new Promise((resolve) => {
    console.log("Updating todo:", updatedTodo);
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

const deleteTodo = (id) => {
  return new Promise((resolve) => {
    console.log("Deleting todo with id:", id);
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

const App = () => {
  const [todos, setTodos] = useState([]); // For managing the list of todos
  const [todo, setTodo] = useState(""); // For managing the input of a new todo

  // Fetch todos when the component mounts
  useEffect(() => {
    getData();
  }, []);

  // Function to fetch todos from the API
  const getData = () => {
    getTodos().then((res) => {
      setTodos(res);
    });
  };

  // Function to add a new todo
  const addTodo = () => {
    if (todo.trim()) {
      console.log("Adding todo:", todo);
      postTodo({ description: todo, isDone: false }).then(() => {
        getData(); // Refresh todos after adding
        setTodo(""); // Clear input field after submission
      });
    }
  };

  // Function to mark a todo as complete
  const completeTodo = (todo) => {
    const updatedTodo = { ...todo, isDone: true };
    putTodo(updatedTodo).then(() => {
      getData(); // Refresh todos after updating
    });
  };

  // Function to delete a todo by its ID
  const deleteTodoItem = (id) => {
    deleteTodo(id).then(() => {
      getData(); // Refresh todos after deleting
    });
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcom to my Todo App
        </h1>

        {/* Input for adding a new todo */}
        <div className="mb-4">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new todo"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            onClick={addTodo}
            className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>

        {/* Displaying the list of todos */}
        <div className="space-y-2">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 border-b"
              >
                <span
                  className={`${
                    todo.isDone ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.description}
                </span>
                <div>
                  {todo.isDone ? (
                    <button
                      onClick={() => deleteTodoItem(todo.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  ) : (
                    <button
                      onClick={() => completeTodo(todo)}
                      className="text-green-500 hover:text-green-600"
                    >
                      Complete
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No todos available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
