import React from "react";
import { Routes, Route } from "react-router-dom";
import ToDoList from "./pages/ToDoList";

const App = () => {
  return (
    <Routes>
      <Route path="todo" element={<ToDoList />} />
    </Routes>
  );
};

export default App;
