import React, { useState, useContext } from "react";
import { TodoInputContext } from "../../context/todoContext";

function TodoInput() {
  const [todo, setTodo] = useState("");

  let { addTodo } = useContext(TodoInputContext);

  function handleTodoSubmit(e) {
    e.preventDefault();

    addTodo(todo);
  }

  return (
    <div>
      <form onSubmit={handleTodoSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TodoInput;
