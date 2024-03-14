import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    // Using functional update to ensure the correct state is used
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, completed: false },
    ]);
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
      {tasks.map((task) => (
        <div key={task.id}>
          <p>
            Task #{task.id} - Completed: {task.completed ? "Yes" : "No"}
          </p>
          <button onClick={() => toggleTask(task.id)}>Toggle</button>
        </div>
      ))}
    </div>
  );
}

export default TaskManager;
