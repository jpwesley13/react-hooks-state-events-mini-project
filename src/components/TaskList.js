import React from "react";
import Task from "./Task";

function TaskList({tasks, currentCategory = "All",  handleDeleteTask}) {

  const filteredTasks = currentCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === currentCategory)

  return (
    <div className="tasks">

      {filteredTasks.map(task => (
        <Task 
            key={task.text} 
            task={task}
            text = {task.text}
            onDelete={handleDeleteTask}
            category={task.category}/>))}
    </div>
  );
}

export default TaskList;
