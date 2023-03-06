import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, inputTask]);
  };

  const handleRemoveAll = () => {
    setTodos([]);
  };

  return (
    <div>
      <input
        placeholder="Enter the task to do..."
        type="text"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add task</button>
      {todos.length >= 1 && (
        <button onClick={handleRemoveAll}>Remove all tasks</button>
      )}

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
