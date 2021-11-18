import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoInput from "./components/todo/TodoInput";
import Todo from "./components/todo/Todo";
import { TodoInputContext, TodoContext } from "./context/todoContext";

import "./App.css";

// let tempTodoArray = [
//   {
//     id: uuidv4(),
//     todo: "walk the dog",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     todo: "walk the cat",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     todo: "walk the hamster",
//     isCompleted: false,
//   },
// ];

function App() {
  let tempTodoArray = window.localStorage.getItem("todos")
    ? JSON.parse(window.localStorage.getItem("todos"))
    : [];

  const [todoArray, setTodoArray] = useState(tempTodoArray);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todoArray));
  }, [todoArray]);

  function showTodoInput() {
    return (
      <TodoInputContext.Provider value={{ addTodo }}>
        <TodoInput />
      </TodoInputContext.Provider>
    );
  }

  function addTodo(todo) {
    let newTodoArray = [
      ...todoArray,
      {
        id: uuidv4(),
        todo,
        isCompleted: false,
      },
    ];
    // window.localStorage.setItem("todos", JSON.stringify(newTodoArray));
    setTodoArray(newTodoArray);
  }

  function handleDelete(index) {
    let newArray = Object.assign([], todoArray);

    newArray.splice(index, 1);
    // window.localStorage.setItem("todos", JSON.stringify(newArray));
    setTodoArray(newArray);
  }

  function handleDone(index) {
    let newArray = [...todoArray];

    newArray[index].isCompleted = !newArray[index].isCompleted;
    // window.localStorage.setItem("todos", JSON.stringify(newArray));
    setTodoArray(newArray);
  }

  function showTodo() {
    return todoArray.map((item, index) => {
      return (
        <TodoContext.Provider
          key={item.id}
          value={{ todoItem: item, index, handleDelete, handleDone }}
        >
          <Todo />
        </TodoContext.Provider>
      );
    });
  }

  return (
    <div className="App">
      {showTodoInput()}
      {showTodo()}
    </div>
  );
}

export default App;
