import React, { useContext } from "react";
import { TodoContext } from "../../context/todoContext";

function Todo() {
  // const todoData = useContext(TodoContext);
  // console.log(todoData);

  const {
    todoItem: { todo, isCompleted },
    index,
    handleDelete,
    handleDone,
  } = useContext(TodoContext);

  return (
    <div>
      <span style={{ textDecoration: isCompleted && "line-through" }}>
        {todo}
      </span>
      <button onClick={() => handleDone(index)}>Done</button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
}

export default Todo;
