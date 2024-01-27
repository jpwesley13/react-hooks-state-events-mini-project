import React, {useState} from "react"; //state is necessary on my app because so many things are going to use it down the pipeline
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data"; //This is like a local version of a fetch. Whenever you fetch you will probably use state
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS) //the states in question
  const [selectedCategory, setCategory] = useState(CATEGORIES[0])

  const handleDeleteTask = (taskText) => {
    const updatedTasks = tasks.filter(task => taskText.text !== task.text)
    setTasks(updatedTasks)
  }
  
  const handleCategoryChange = (category) => {
    setCategory(category)
  }

  const handleTaskFormSubmit = (newTask) => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks, newTask];
      console.log("upd:", updatedTasks);
      return updatedTasks;
    });
    console.log("Current tasks:", tasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      onCategoryChange={handleCategoryChange}
      currentCategory={selectedCategory}/>
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList 
      currentCategory={selectedCategory}
      tasks={tasks} 
      handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;