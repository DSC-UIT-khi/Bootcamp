// React
import { useState } from "react";

// Styles
import "./App.css";

// Components
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      {/* <Counter counter={counter} setCounter={setCounter} incrementVal={11} /> */}
      <Todo />
    </div>
  );
}

export default App;
