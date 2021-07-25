import React, { useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todo, setTodo] = useState<String>("");
  const [allTodos, setAllTodos] = useState<String[]>([]);

  const handleClick = () => {
    setAllTodos([...allTodos, todo]);
    setTodo("");
  };

  const removeTodo = (todo: String) => {
    setAllTodos(allTodos.filter((t) => t !== todo));
  };

  console.log(allTodos);
  return (
    <div>
      <div className="mb-3 form">
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Add Todo"
          onBlur={(e) => setTodo(e.target.value)}
        ></input>
        <button onClick={() => handleClick()} className="btn btn-primary">
          Add Todo
        </button>
      </div>
      {allTodos.map((t) => (
        <Todo todo={t} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default Todos;
