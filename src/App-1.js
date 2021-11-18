import { useReducer } from "react";
import "./App.css";

const initialState = { count: 0 };
//Get clear button to work meaning count back to zero
//Get Times 5 to work
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "clear":
      return { count: 0 };
    case "times5":
      return { count: state.count * 5 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
      <button onClick={() => dispatch({ type: "times5" })}>X5</button>
    </div>
  );
}

export default App;
