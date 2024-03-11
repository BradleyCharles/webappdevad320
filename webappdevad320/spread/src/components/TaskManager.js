import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState();

  /*   const addTask = () => { 
    const newTask = {
      id: 0,
      title: 'task' + id,
      completed: false
    };

    setTasks({...tasks, id: tasks.id + 1});
    setId();
  }; */
  /*  const newTask = {
    id: 0,
    title: "task" + id,
    completed: false,
  }; */

  const addTask = () => {
    setTasks({ ...tasks, id: tasks.id + 1 });
  };

  const toggleTask = (id) => {};

  const toggleTaskCompletion = () => {};

  return (
    <div>
      <button onClick={addTask}>Add</button>
      <button onClick={toggleTask}>Toggle</button>
    </div>
  );
}

export default TaskManager;
