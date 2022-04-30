import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.scss";
import { InputField } from "./components/input-field/input-field.component";
import { TaskList } from "./components/task-list/task-list";
import { Task } from "./types/task";

export const App: React.FC = () => {
  const [task, setTask] = useState<string | number>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTask, setCompletedTask] = useState<Task[]>([]);

  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), task, done: false }]);
      setTask("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = tasks;
    let complete = completedTask;

    if (source.droppableId === "TaskList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TaskList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTask(complete);
    setTasks(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <h1 className="heading">List of Tasks</h1>
        <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          completedTask={completedTask}
          setCompletedTask={setCompletedTask}
        />
      </div>
    </DragDropContext>
  );
};
