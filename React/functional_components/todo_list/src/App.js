import './App.css';
import React, { useState } from "react";
import { Todo } from "./components/Todo";
import { useEffect } from 'react';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState("false");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    const data = localStorage.getItem('todos')
    console.log(data)
    if (data) {
      setTodos(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length === 0) {
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false
    };
    setTodos([...todos, todoItem]);
    setNewTodo("");
    isSubmitted === "false" ? setIsSubmitted("true") : setIsSubmitted("false")
  };


  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos);
  };


  const handleToggleComplete = (idx) => {
    console.log(todos)
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        // todo.complete = !todo.complete;
        // To avoid mutating the todo directly, do this:
        const updatedTodo = {...todo, complete: !todo.complete};
      }
      return updatedTodo;
      // return todo;
    });
    setTodos(updatedTodos);
  };


  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={(e) => {
          handleNewTodoSubmit(e);
        }}
      >
        <input
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />
      {todos.map((todo, i) => {
        return (
          <Todo
            key={i}
            i={i}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleTodoDelete={handleTodoDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
