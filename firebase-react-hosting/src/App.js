import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TodoForm from "./components/TodoForm";
import { Button, Container, Table } from "reactstrap";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./contexts/TodoContext";


function App() {
  

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo List</h1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>

      </Container>
    </div>
  );
}

export default App;
