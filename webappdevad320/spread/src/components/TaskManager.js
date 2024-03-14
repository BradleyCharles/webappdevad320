import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    // Using functional update to ensure the correct state is used
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, completed: false, show: true },
    ]);
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...tasks, show: !task.show } : task
      )
    );
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <button onClick={addTask}>Add</button>
      {!tasks.show &&
        tasks.map((task) => (
          <div key={task.id}>
            <p>
              Task #{task.id} - Completed: {task.completed ? "Yes" : "No"}
              Task #{task.show} - Show: {task.show ? "Yes" : "No"}
            </p>
            <button onClick={() => toggleTask(task.id)}>Toggle</button>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </div>
        ))}
    </div>
  );
}

export default TaskManager;
