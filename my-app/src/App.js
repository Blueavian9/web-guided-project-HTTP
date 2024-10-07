// Todo mock 9:
// clean version of CSSTransition code: 
import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css"; // Import the CSS file for glow animation

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
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getTodos().then((res) => {
      setTodos(res);
    });
  };

  const addTodo = () => {
    if (todo.trim()) {
      console.log("Adding todo:", todo);
      postTodo({ description: todo, isDone: false }).then(() => {
        getData();
        setTodo("");
      });
    }
  };

  const completeTodo = (todo) => {
    const updatedTodo = { ...todo, isDone: true };
    putTodo(updatedTodo).then(() => {
      getData();
    });
  };

  const deleteTodoItem = (id) => {
    deleteTodo(id).then(() => {
      getData();
    });
  };

  const removeCompletedTodos = () => {
    if (
      window.confirm("Are you sure you want to remove all completed tasks?")
    ) {
      const incompleteTodos = todos.filter((todo) => !todo.isDone);
      setTodos(incompleteTodos);
    }
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#243b55] to-[#141e30]">
      <div className="w-full max-w-md glow-border">
        <h1 className="text-3xl font-bold text-center text-black mb-4">
          Todo App
        </h1>

        <div className="mb-4">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new todo"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            aria-label="New Todo Input"
          />
          <button
            onClick={addTodo}
            className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition duration-300"
            aria-label="Add Todo"
          >
            Add Todo
          </button>
        </div>

        <button
          onClick={removeCompletedTodos}
          className="w-full mb-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition duration-300"
          aria-label="Remove Completed Todos"
        >
          Remove Todos
        </button>

        <div className="space-y-2">
          <TransitionGroup>
            {todos.length > 0 ? (
              todos.map((todo) => (
                <CSSTransition key={todo.id} timeout={300} classNames="fade">
                  <div className="flex justify-between items-center p-2 border-b last:border-b-0">
                    <span
                      className={`text-gray-800 ${
                        todo.isDone ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {todo.description}
                    </span>
                    <div className="flex items-center space-x-2">
                      {todo.isDone ? (
                        <button
                          onClick={() => deleteTodoItem(todo.id)}
                          className="text-red-500 hover:text-red-600 transition duration-300"
                          aria-label="Delete Todo"
                        >
                          Delete
                        </button>
                      ) : (
                        <button
                          onClick={() => completeTodo(todo)}
                          className="text-orange-100 hover:text-orange-400 transition duration-300"
                          aria-label="Complete Todo"
                        >
                          Complete
                        </button>
                      )}
                    </div>
                  </div>
                </CSSTransition>
              ))
            ) : (
              <p className="text-center text-gray-500">No todos available</p>
            )}
          </TransitionGroup>

          {show && (
            <CSSTransition
              in={show}
              timeout={300}
              classNames="fade"
              onExited={() => console.log("Exited")}
            >
              <div>Your content here</div>
            </CSSTransition>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;







// Todo mock 8: 
// unclean verstion of CSSTransition code:
// import React, { useEffect, useState } from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import "./App.css"; // Import the CSS file for glow animation

// // Mock API functions for todos
// const getTodos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, description: "say hello", isDone: false },
//         { id: 2, description: "say hello again", isDone: false },
//       ]);
//     }, 500);
//   });
// };

// const postTodo = (newTodo) => {
//   return new Promise((resolve) => {
//     console.log("Posting new todo:", newTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const putTodo = (updatedTodo) => {
//   return new Promise((resolve) => {
//     console.log("Updating todo:", updatedTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const deleteTodo = (id) => {
//   return new Promise((resolve) => {
//     console.log("Deleting todo with id:", id);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState("");
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     getTodos().then((res) => {
//       setTodos(res);
//     });
//   };

//   const addTodo = () => {
//     if (todo.trim()) {
//       console.log("Adding todo:", todo);
//       postTodo({ description: todo, isDone: false }).then(() => {
//         getData();
//         setTodo("");
//       });
//     }
//   };

//   const completeTodo = (todo) => {
//     const updatedTodo = { ...todo, isDone: true };
//     putTodo(updatedTodo).then(() => {
//       getData();
//     });
//   };

//   const deleteTodoItem = (id) => {
//     deleteTodo(id).then(() => {
//       getData();
//     });
//   };

//   const removeCompletedTodos = () => {
//     if (window.confirm("Are you sure you want to remove all completed tasks?")) {
//       const incompleteTodos = todos.filter((todo) => !todo.isDone);
//       setTodos(incompleteTodos);
//     }
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#243b55] to-[#141e30]">
//       <div className="w-full max-w-md glow-border">
//         <h1 className="text-3xl font-bold text-center text-black mb-4">Todo App</h1>

//         <div className="mb-4">
//           <input
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder="Add a new todo"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//             aria-label="New Todo Input"
//           />
//           <button
//             onClick={addTodo}
//             className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition duration-300"
//             aria-label="Add Todo"
//           >
//             Add Todo
//           </button>
//         </div>

//         <button
//           onClick={removeCompletedTodos}
//           className="w-full mb-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition duration-300"
//           aria-label="Remove Completed Todos"
//         >
//           Remove Todos
//         </button>

//         <div className="space-y-2">
//           <TransitionGroup>
//             {todos.length > 0 ? (
//               todos.map((todo, index) => (
//                 <CSSTransition key={todo.id} timeout={300} classNames="fade">
//                   <div className="flex justify-between items-center p-2 border-b last:border-b-0">
//                     <span className={`text-gray-800 ${todo.isDone ? "line-through text-gray-500" : ""}`}>
//                       {todo.description}
//                     </span>
//                     <div className="flex items-center space-x-2">
//                       {todo.isDone ? (
//                         <button
//                           onClick={() => deleteTodoItem(todo.id)}
//                           className="text-red-500 hover:text-red-600 transition duration-300"
//                           aria-label="Delete Todo"
//                         >
//                           Delete
//                         </button>
//                       ) : (
//                         <button
//                           onClick={() => completeTodo(todo)}
//                           className="text-orange-100 hover:text-orange-400 transition duration-300"
//                           aria-label="Complete Todo"
//                         >
//                           Complete
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </CSSTransition>
//               ))
//             ) : (
//               <p className="text-center text-gray-500"></p>
//             )}
//           </TransitionGroup>
//           {show && (
//             <CSSTransition
//               in={show}
//               timeout={300}
//               classNames="fade"
//               onExited={() => console.log("Exited")}
//             >
//               <div>Your content here</div>
//             </CSSTransition>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


















// Todo mock 7:
// import React, { useEffect, useState } from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import "./App.css"; // Import the CSS file for glow animation

// // Mock API functions for todos
// const getTodos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, description: "say hello", isDone: false },
//         { id: 2, description: "say hello again", isDone: false },
//       ]);
//     }, 500);
//   });
// };

// const postTodo = (newTodo) => {
//   return new Promise((resolve) => {
//     console.log("Posting new todo:", newTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const putTodo = (updatedTodo) => {
//   return new Promise((resolve) => {
//     console.log("Updating todo:", updatedTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const deleteTodo = (id) => {
//   return new Promise((resolve) => {
//     console.log("Deleting todo with id:", id);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState("");
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     getTodos().then((res) => {
//       setTodos(res);
//     });
//   };

//   const addTodo = () => {
//     if (todo.trim()) {
//       console.log("Adding todo:", todo);
//       postTodo({ description: todo, isDone: false }).then(() => {
//         getData();
//         setTodo("");
//       });
//     }
//   };

//   const completeTodo = (todo) => {
//     const updatedTodo = { ...todo, isDone: true };
//     putTodo(updatedTodo).then(() => {
//       getData();
//     });
//   };

//   const deleteTodoItem = (id) => {
//     deleteTodo(id).then(() => {
//       getData();
//     });
//   };

//   const removeCompletedTodos = () => {
//     if (
//       window.confirm("Are you sure you want to remove all completed tasks?")
//     ) {
//       const incompleteTodos = todos.filter((todo) => !todo.isDone);
//       setTodos(incompleteTodos);
//     }
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#243b55] to-[#141e30]">
//       <div className="w-full max-w-md glow-border">
//         <h1 className="text-3xl font-bold text-center text-black mb-4">
//           Todo App
//         </h1>

//         <div className="mb-4">
//           <input
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder="Add a new todo"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//             aria-label="New Todo Input"
//           />
//           <button
//             onClick={addTodo}
//             className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition duration-300"
//             aria-label="Add Todo"
//           >
//             Add Todo
//           </button>
//         </div>

//         <button
//           onClick={removeCompletedTodos}
//           className="w-full mb-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition duration-300"
//           aria-label="Remove Completed Todos"
//         >
//           Remove Todos
//         </button>

//         <div className="space-y-2">
//           <TransitionGroup>
//             {todos.length > 0 ? (
//               todos.map((todo, index) => (
//                 <CSSTransition key={index} timeout={300} classNames="fade">
//                   <div className="flex justify-between items-center p-2 border-b last:border-b-0">
//                     <span
//                       className={`text-gray-800 ${
//                         todo.isDone ? "line-through text-gray-500" : ""
//                       }`}
//                     >
//                       {todo.description}
//                     </span>
//                     <div className="flex items-center space-x-2">
//                       {todo.isDone ? (
//                         <button
//                           onClick={() => deleteTodoItem(todo.id)}
//                           className="text-red-500 hover:text-red-600 transition duration-300"
//                           aria-label="Delete Todo"
//                         >
//                           Delete
//                         </button>
//                       ) : (
//                         <button
//                           onClick={() => completeTodo(todo)}
//                           className="text-orange-100 hover:text-orange-400 transition duration-300"
//                           aria-label="Complete Todo"
//                         >
//                           Complete
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </CSSTransition>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No todos available</p>
//             )}
//           </TransitionGroup>
//           <TransitionGroup>
//             {show && (
//               <CSSTransition
//                 in={show}
//                 timeout={300}
//                 classNames="fade"
//                 onExited={() => console.log("Exited")}
//               >
//                 <div>Your content here</div>
//               </CSSTransition>
//             )}
//           </TransitionGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;







// Todo mock 6:
// import React, { useEffect, useState } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "./App.css"; // Import the CSS file for glow animation

// // Mock API functions for todos
// const getTodos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, description: "say hello", isDone: false },
//         { id: 2, description: "say hello again", isDone: false },
//       ]);
//     }, 500);
//   });
// };

// const postTodo = (newTodo) => {
//   return new Promise((resolve) => {
//     console.log("Posting new todo:", newTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const putTodo = (updatedTodo) => {
//   return new Promise((resolve) => {
//     console.log("Updating todo:", updatedTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const deleteTodo = (id) => {
//   return new Promise((resolve) => {
//     console.log("Deleting todo with id:", id);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState("");

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     getTodos().then((res) => {
//       setTodos(res);
//     });
//   };

//   const addTodo = () => {
//     if (todo.trim()) {
//       console.log("Adding todo:", todo);
//       postTodo({ description: todo, isDone: false }).then(() => {
//         getData();
//         setTodo("");
//       });
//     }
//   };

//   const completeTodo = (todo) => {
//     const updatedTodo = { ...todo, isDone: true };
//     putTodo(updatedTodo).then(() => {
//       getData();
//     });
//   };

//   const deleteTodoItem = (id) => {
//     deleteTodo(id).then(() => {
//       getData();
//     });
//   };

//   const removeCompletedTodos = () => {
//     if (window.confirm("Are you sure you want to remove all completed tasks?")) {
//       const incompleteTodos = todos.filter((todo) => !todo.isDone);
//       setTodos(incompleteTodos);
//     }
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#243b55] to-[#141e30]">
//       <div className="w-full max-w-md glow-border shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center text-white mb-4">
//           Todo App
//         </h1>

//         <div className="mb-4">
//           <input
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder="Add a new todo"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//             aria-label="New Todo Input"
//           />
//           <button
//             onClick={addTodo}
//             className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition duration-300"
//             aria-label="Add Todo"
//           >
//             Add Todo
//           </button>
//         </div>

//         <button
//           onClick={removeCompletedTodos}
//           className="w-full mb-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition duration-300"
//           aria-label="Remove Completed Todos"
//         >
//           Remove Todos
//         </button>

//         <div className="space-y-2">
//           <TransitionGroup>
//             {todos.length > 0 ? (
//               todos.map((todo, index) => (
//                 <CSSTransition key={index} timeout={300} classNames="fade">
//                   <div className="flex justify-between items-center p-2 border-b last:border-b-0">
//                     <span className={`text-gray-800 ${todo.isDone ? "line-through text-gray-500" : ""}`}>
//                       {todo.description}
//                     </span>
//                     <div className="flex items-center space-x-2">
//                       {todo.isDone ? (
//                         <button
//                           onClick={() => deleteTodoItem(todo.id)}
//                           className="text-red-500 hover:text-red-600 transition duration-300"
//                           aria-label="Delete Todo"
//                         >
//                           Delete
//                         </button>
//                       ) : (
//                         <button
//                           onClick={() => completeTodo(todo)}
//                           className="text-orange-100 hover:text-orange-400 transition duration-300"
//                           aria-label="Complete Todo"
//                         >
//                           Complete
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </CSSTransition>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No todos available</p>
//             )}
//           </TransitionGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// Todo mock 5:
// import React, { useEffect, useState } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

// // Mock API functions for todos
// const getTodos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, description: "say hello", isDone: false },
//         { id: 2, description: "say hello again", isDone: false },
//       ]);
//     }, 500);
//   });
// };

// const postTodo = (newTodo) => {
//   return new Promise((resolve) => {
//     console.log("Posting new todo:", newTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const putTodo = (updatedTodo) => {
//   return new Promise((resolve) => {
//     console.log("Updating todo:", updatedTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const deleteTodo = (id) => {
//   return new Promise((resolve) => {
//     console.log("Deleting todo with id:", id);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState([]); // For managing the list of todos
//   const [todo, setTodo] = useState(""); // For managing the input of a new todo

//   // Fetch todos when the component mounts
//   useEffect(() => {
//     getData();
//   }, []);

//   // Function to fetch todos from the API
//   const getData = () => {
//     getTodos().then((res) => {
//       setTodos(res);
//     });
//   };

//   // Function to add a new todo
//   const addTodo = () => {
//     if (todo.trim()) {
//       console.log("Adding todo:", todo);
//       postTodo({ description: todo, isDone: false }).then(() => {
//         getData(); // Refresh todos after adding
//         setTodo(""); // Clear input field after submission
//       });
//     }
//   };

//   // Function to mark a todo as complete
//   const completeTodo = (todo) => {
//     const updatedTodo = { ...todo, isDone: true };
//     putTodo(updatedTodo).then(() => {
//       getData(); // Refresh todos after updating
//     });
//   };

//   // Function to delete a todo by its ID
//   const deleteTodoItem = (id) => {
//     deleteTodo(id).then(() => {
//       getData(); // Refresh todos after deleting
//     });
//   };

//   // Function to remove all completed todos with confirmation
//   const removeCompletedTodos = () => {
//     if (
//       window.confirm("Are you sure you want to remove all completed tasks?")
//     ) {
//       const incompleteTodos = todos.filter((todo) => !todo.isDone);
//       setTodos(incompleteTodos); // Update state to keep only incomplete todos
//     }
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#243b55] to-[#141e30]">
//       {/* <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"> */}
//       <div className="w-full max-w-md bg-gradient-to-r from-cyan-200 to-cyan-600 shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center text-white mb-4">
//           Todo App
//         </h1>

//         {/* Input for adding a new todo */}
//         <div className="mb-4">
//           <input
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder="Add a new todo"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//             aria-label="New Todo Input"
//           />
//           <button
//             onClick={addTodo}
//             className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition duration-300"
//             aria-label="Add Todo"
//           >
//             Add Todo
//           </button>
//         </div>

//         {/* Button to remove completed todos */}
//         <button
//           onClick={removeCompletedTodos}
//           className="w-full mb-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition duration-300"
//           aria-label="Remove Completed Todos"
//         >
//           Remove Todos
//         </button>

//         {/* Displaying the list of todos with transition */}
//         <div className="space-y-2">
//           <TransitionGroup>
//             {todos.length > 0 ? (
//               todos.map((todo, index) => (
//                 <CSSTransition key={index} timeout={300} classNames="fade">
//                   <div className="flex justify-between items-center p-2 border-b last:border-b-0">
//                     <span
//                       className={`text-gray-800 ${
//                         todo.isDone ? "line-through text-gray-500" : ""
//                       }`}
//                     >
//                       {todo.description}
//                     </span>
//                     <div className="flex items-center space-x-2">
//                       {todo.isDone ? (
//                         <button
//                           onClick={() => deleteTodoItem(todo.id)}
//                           className="text-red-500 hover:text-red-600 transition duration-300"
//                           aria-label="Delete Todo"
//                         >
//                           Delete
//                         </button>
//                       ) : (
//                         <button
//                           onClick={() => completeTodo(todo)}
//                           className="text-orange-100 hover:text-orange-400 transition duration-300"
//                           aria-label="Complete Todo"
//                         >
//                           Complete
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </CSSTransition>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No todos available</p>
//             )}
//           </TransitionGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// Todo Mock 4:
// created remove completed task feature:
// import React, { useEffect, useState } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

// // Mock API functions for todos
// const getTodos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, description: "say hello", isDone: false },
//         { id: 2, description: "say hello again", isDone: false },
//       ]);
//     }, 500);
//   });
// };

// const postTodo = (newTodo) => {
//   return new Promise((resolve) => {
//     console.log("Posting new todo:", newTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const putTodo = (updatedTodo) => {
//   return new Promise((resolve) => {
//     console.log("Updating todo:", updatedTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const deleteTodo = (id) => {
//   return new Promise((resolve) => {
//     console.log("Deleting todo with id:", id);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState([]); // For managing the list of todos
//   const [todo, setTodo] = useState(""); // For managing the input of a new todo

//   // Fetch todos when the component mounts
//   useEffect(() => {
//     getData();
//   }, []);

//   // Function to fetch todos from the API
//   const getData = () => {
//     getTodos().then((res) => {
//       setTodos(res);
//     });
//   };

//   // Function to add a new todo
//   const addTodo = () => {
//     if (todo.trim()) {
//       console.log("Adding todo:", todo);
//       postTodo({ description: todo, isDone: false }).then(() => {
//         getData(); // Refresh todos after adding
//         setTodo(""); // Clear input field after submission
//       });
//     }
//   };

//   // Function to mark a todo as complete
//   const completeTodo = (todo) => {
//     const updatedTodo = { ...todo, isDone: true };
//     putTodo(updatedTodo).then(() => {
//       getData(); // Refresh todos after updating
//     });
//   };

//   // Function to delete a todo by its ID
//   const deleteTodoItem = (id) => {
//     deleteTodo(id).then(() => {
//       getData(); // Refresh todos after deleting
//     });
//   };

//   // Function to remove all completed todos with confirmation
//   const removeCompletedTodos = () => {
//     if (window.confirm("Are you sure you want to remove all completed tasks?")) {
//       const incompleteTodos = todos.filter((todo) => !todo.isDone);
//       setTodos(incompleteTodos); // Update state to keep only incomplete todos
//     }
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Todo App</h1>

//         {/* Input for adding a new todo */}
//         <div className="mb-4">
//           <input
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder="Add a new todo"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//             aria-label="New Todo Input"
//           />
//           <button
//             onClick={addTodo}
//             className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
//             aria-label="Add Todo"
//           >
//             Add Todo
//           </button>
//         </div>

//         {/* Button to remove completed todos */}
//         <button
//           onClick={removeCompletedTodos}
//           className="w-full mb-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
//           aria-label="Remove Completed Todos"
//         >
//           Remove Completed Todos
//         </button>

//         {/* Displaying the list of todos with transition */}
//         <div className="space-y-2">
//           <TransitionGroup>
//             {todos.length > 0 ? (
//               todos.map((todo, index) => (
//                 <CSSTransition key={index} timeout={300} classNames="fade">
//                   <div className="flex justify-between items-center p-2 border-b last:border-b-0">
//                     <span
//                       className={`text-gray-800 ${
//                         todo.isDone ? "line-through text-gray-500" : ""
//                       }`}
//                     >
//                       {todo.description}
//                     </span>
//                     <div className="flex items-center space-x-2">
//                       {todo.isDone ? (
//                         <button
//                           onClick={() => deleteTodoItem(todo.id)}
//                           className="text-red-500 hover:text-red-600 transition duration-300"
//                           aria-label="Delete Todo"
//                         >
//                           Delete
//                         </button>
//                       ) : (
//                         <button
//                           onClick={() => completeTodo(todo)}
//                           className="text-green-500 hover:text-green-600 transition duration-300"
//                           aria-label="Complete Todo"
//                         >
//                           Complete
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </CSSTransition>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No todos available</p>
//             )}
//           </TransitionGroup>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// Todo Mock 3:
// import React, { useEffect, useState } from "react";

// // Mock API functions for todos
// const getTodos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, description: "say hello", isDone: false },
//         { id: 2, description: "say hello again", isDone: false },
//       ]);
//     }, 500);
//   });
// };

// const postTodo = (newTodo) => {
//   return new Promise((resolve) => {
//     console.log("Posting new todo:", newTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const putTodo = (updatedTodo) => {
//   return new Promise((resolve) => {
//     console.log("Updating todo:", updatedTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const deleteTodo = (id) => {
//   return new Promise((resolve) => {
//     console.log("Deleting todo with id:", id);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState([]); // For managing the list of todos
//   const [todo, setTodo] = useState(""); // For managing the input of a new todo

//   // Fetch todos when the component mounts
//   useEffect(() => {
//     getData();
//   }, []);

//   // Function to fetch todos from the API
//   const getData = () => {
//     getTodos().then((res) => {
//       setTodos(res);
//     });
//   };

//   // Function to add a new todo
//   const addTodo = () => {
//     if (todo.trim()) {
//       console.log("Adding todo:", todo);
//       postTodo({ description: todo, isDone: false }).then(() => {
//         getData(); // Refresh todos after adding
//         setTodo(""); // Clear input field after submission
//       });
//     }
//   };

//   // Function to mark a todo as complete
//   const completeTodo = (todo) => {
//     const updatedTodo = { ...todo, isDone: true };
//     putTodo(updatedTodo).then(() => {
//       getData(); // Refresh todos after updating
//     });
//   };

//   // Function to delete a todo by its ID
//   const deleteTodoItem = (id) => {
//     deleteTodo(id).then(() => {
//       getData(); // Refresh todos after deleting
//     });
//   };

//   // Function to remove all completed todos
//   const removeCompletedTodos = () => {
//     const incompleteTodos = todos.filter((todo) => !todo.isDone);
//     setTodos(incompleteTodos); // Update state to keep only incomplete todos
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
//           Todo App
//         </h1>

//         {/* Input for adding a new todo */}
//         <div className="mb-4">
//           <input
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder="Add a new todo"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//             aria-label="New Todo Input"
//           />
//           <button
//             onClick={addTodo}
//             className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
//             aria-label="Add Todo"
//           >
//             Add Todo
//           </button>
//         </div>

//         {/* Button to remove completed todos */}
//         <button
//           onClick={removeCompletedTodos}
//           className="w-full mb-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
//           aria-label="Remove Completed Todos"
//         >
//           Remove Completed Todos
//         </button>

//         {/* Displaying the list of todos */}
//         <div className="space-y-2">
//           {todos.length > 0 ? (
//             todos.map((todo, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center p-2 border-b last:border-b-0"
//               >
//                 <span
//                   className={`text-gray-800 ${
//                     todo.isDone ? "line-through text-gray-500" : ""
//                   }`}
//                 >
//                   {todo.description}
//                 </span>
//                 <div className="flex items-center space-x-2">
//                   {todo.isDone ? (
//                     <button
//                       onClick={() => deleteTodoItem(todo.id)}
//                       className="text-red-500 hover:text-red-600 transition duration-300"
//                       aria-label="Delete Todo"
//                     >
//                       Delete
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => completeTodo(todo)}
//                       className="text-green-500 hover:text-green-600 transition duration-300"
//                       aria-label="Complete Todo"
//                     >
//                       Complete
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No todos available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// Todo Mock 2:
// import React, { useEffect, useState } from "react";

// // Mock API functions for todos
// const getTodos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, description: "say hello", isDone: false },
//         { id: 2, description: "say hello again", isDone: false },
//       ]);
//     }, 500);
//   });
// };

// const postTodo = (newTodo) => {
//   return new Promise((resolve) => {
//     console.log("Posting new todo:", newTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const putTodo = (updatedTodo) => {
//   return new Promise((resolve) => {
//     console.log("Updating todo:", updatedTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const deleteTodo = (id) => {
//   return new Promise((resolve) => {
//     console.log("Deleting todo with id:", id);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState([]); // For managing the list of todos
//   const [todo, setTodo] = useState(""); // For managing the input of a new todo

//   // Fetch todos when the component mounts
//   useEffect(() => {
//     getData();
//   }, []);

//   // Function to fetch todos from the API
//   const getData = () => {
//     getTodos().then((res) => {
//       setTodos(res);
//     });
//   };

//   // Function to add a new todo
//   const addTodo = () => {
//     if (todo.trim()) {
//       console.log("Adding todo:", todo);
//       postTodo({ description: todo, isDone: false }).then(() => {
//         getData(); // Refresh todos after adding
//         setTodo(""); // Clear input field after submission
//       });
//     }
//   };

//   // Function to mark a todo as complete
//   const completeTodo = (todo) => {
//     const updatedTodo = { ...todo, isDone: true };
//     putTodo(updatedTodo).then(() => {
//       getData(); // Refresh todos after updating
//     });
//   };

//   // Function to delete a todo by its ID
//   const deleteTodoItem = (id) => {
//     deleteTodo(id).then(() => {
//       getData(); // Refresh todos after deleting
//     });
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
//           Todo App
//         </h1>

//         {/* Input for adding a new todo */}
//         <div className="mb-4">
//           <input
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder="Add a new todo"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
//             aria-label="New Todo Input"
//           />
//           <button
//             onClick={addTodo}
//             className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
//             aria-label="Add Todo"
//           >
//             Add Todo
//           </button>
//         </div>

//         {/* Displaying the list of todos */}
//         <div className="space-y-2">
//           {todos.length > 0 ? (
//             todos.map((todo, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center p-2 border-b last:border-b-0"
//               >
//                 <span
//                   className={`text-gray-800 ${
//                     todo.isDone ? "line-through text-gray-500" : ""
//                   }`}
//                 >
//                   {todo.description}
//                 </span>
//                 <div className="flex items-center space-x-2">
//                   {todo.isDone ? (
//                     <button
//                       onClick={() => deleteTodoItem(todo.id)}
//                       className="text-red-500 hover:text-red-600 transition duration-300"
//                       aria-label="Delete Todo"
//                     >
//                       Delete
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => completeTodo(todo)}
//                       className="text-green-500 hover:text-green-600 transition duration-300"
//                       aria-label="Complete Todo"
//                     >
//                       Complete
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No todos available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// Todo Mock 1:
// code before optimization
// import React, { useEffect, useState } from "react";
// // import "./App.css"; // You don't need this if you're using Tailwind CSS

// // Mock API functions for todos
// const getTodos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, description: "say hello", isDone: false },
//         { id: 2, description: "say hello again", isDone: false },
//       ]);
//     }, 500);
//   });
// };

// const postTodo = (newTodo) => {
//   return new Promise((resolve) => {
//     console.log("Posting new todo:", newTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const putTodo = (updatedTodo) => {
//   return new Promise((resolve) => {
//     console.log("Updating todo:", updatedTodo);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const deleteTodo = (id) => {
//   return new Promise((resolve) => {
//     console.log("Deleting todo with id:", id);
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState([]); // For managing the list of todos
//   const [todo, setTodo] = useState(""); // For managing the input of a new todo

//   // Fetch todos when the component mounts
//   useEffect(() => {
//     getData();
//   }, []);

//   // Function to fetch todos from the API
//   const getData = () => {
//     getTodos().then((res) => {
//       setTodos(res);
//     });
//   };

//   // Function to add a new todo
//   const addTodo = () => {
//     if (todo.trim()) {
//       console.log("Adding todo:", todo);
//       postTodo({ description: todo, isDone: false }).then(() => {
//         getData(); // Refresh todos after adding
//         setTodo(""); // Clear input field after submission
//       });
//     }
//   };

//   // Function to mark a todo as complete
//   const completeTodo = (todo) => {
//     const updatedTodo = { ...todo, isDone: true };
//     putTodo(updatedTodo).then(() => {
//       getData(); // Refresh todos after updating
//     });
//   };

//   // Function to delete a todo by its ID
//   const deleteTodoItem = (id) => {
//     deleteTodo(id).then(() => {
//       getData(); // Refresh todos after deleting
//     });
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-2xl font-bold text-center mb-4">
//            Todo App
//         </h1>

//         {/* Input for adding a new todo */}
//         <div className="mb-4">
//           <input
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder="Add a new todo"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//           />
//           <button
//             onClick={addTodo}
//             className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Add Todo
//           </button>
//         </div>

//         {/* Displaying the list of todos */}
//         <div className="space-y-2">
//           {todos.length > 0 ? (
//             todos.map((todo, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center p-2 border-b"
//               >
//                 <span
//                   className={`${
//                     todo.isDone ? "line-through text-gray-500" : ""
//                   }`}
//                 >
//                   {todo.description}
//                 </span>
//                 <div>
//                   {todo.isDone ? (
//                     <button
//                       onClick={() => deleteTodoItem(todo.id)}
//                       className="text-red-500 hover:text-red-600"
//                     >
//                       Delete
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => completeTodo(todo)}
//                       className="text-green-500 hover:text-green-600"
//                     >
//                       Complete
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No todos available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
