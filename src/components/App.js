import { useState } from "react";

const App = () => {
  const [task, setTask] = useState({
    title: "My First component",
    done: true,
  });

  const handleClick = () =>
    setTask({
      ...task,
      done: !task.done,
    });

  return (
    <div>
      <h3>{task.title}</h3>
      <h3>{task.done.toString()}</h3>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
