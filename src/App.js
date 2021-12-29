import React from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import AddTask from "./component/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "January 3rd at 3:30pm",
      reminder: "true",
    },
    {
      id: 2,
      text: "Basketball training sessions",
      day: "December 3rd, 2022 at 7:30pm",
      reminder: "true",
    },
    {
      id: 3,
      text: "Weekend Hangout",
      day: "January 1st at 3:30pm",
      reminder: "false",
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // console.log("delet", id);
  };
  const doubleClick = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onDoubleClick={doubleClick}
        />
      ) : (
        "THIS TASK IS EMPTY!!!"
      )}
    </div>
  );
}

export default App;
