import React, { useEffect, useState } from "react";
import "./App.css";
// import logo from "./logo.svg"; // Uncomment if you're using the logo

// Mock API functions for todos
const getTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, description: "say hello", isDone: false },
        { id: 2, description: "say hello again", isDone: false },
      ]);
    }, 500); // Added closing of setTimeout and return statement
  });
};

export default App;
