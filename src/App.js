import React, { useState } from "react";
import Header from "./component/Header/Header";
import "./App.css";
import Todos from "./component/herosection/todos";
import AddTodo from "./component/herosection/Addtodo";
import Footer from "./component/Footer/Footer";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to the market",
      desc: "Buy some groceries",
      completed: false,
    },
    {
      id: 2,
      title: "Go to the mall",
      desc: "Buy clothes",
      completed: false,
    },
  ]);

  const addTodo = (title, desc) => {
    const newTodo = {
      id: Date.now(),
      title,
      desc,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const toggleComplete = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="App">
      <Header title="React Todo App" SearchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} toggleComplete={toggleComplete} />
      <Footer />
    </div>
  );
}

export default App;
