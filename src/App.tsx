import React, { useState } from "react";
import "./App.scss";
import { InputField } from "./components/input-field/input-field.component";
import { TaskList } from "./components/task-list/task-list";
import { Task } from "./types/task";

export const App: React.FC = () => {
  const [task, setTask] = useState<string | number>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), task, done: false }]);
      setTask("");
    }
  };

  console.log(tasks);

  return (
    <div className="app">
      <h1 className="heading">List of Tasks</h1>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
