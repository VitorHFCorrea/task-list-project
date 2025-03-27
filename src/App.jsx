import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import { v4 } from "uuid"; //importing uuid to generate unique ids

//main component
function App() {
  //get tasks from local storage
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [] 
  );

  //save tasks in local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //change the task status
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task;
    });
    setTasks(newTasks);
  }

  //delete a task
  function onDeleteTaskClick(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //add a new task
  function onAddTaskSubmit(title, description) {
    //create a new task object
    const newTasks = {id: v4(), title, description, isCompleted: false}
    setTasks([...tasks, newTasks]);
  }

  //return the main component
  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Lista de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
