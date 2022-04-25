import React from "react";
import { Task } from "../../types/task";
import { TaskItem } from "../task-item/task-item";

import "./task-list.scss";

interface PropsTaskList {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList: React.FC<PropsTaskList> = ({ tasks, setTasks }) => {
  return (
    <section className="container">
      <section className="tasks">
        {tasks.map((task) => (
          <TaskItem
            task={task}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </section>
    </section>
  );
};
