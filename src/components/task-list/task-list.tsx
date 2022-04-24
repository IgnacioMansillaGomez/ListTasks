import React from "react";
import { Task } from "../../types/task";
import { TaskItem } from "../task-item/task-item";

interface PropsTaskList {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList: React.FC<PropsTaskList> = ({ tasks, setTasks }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
};
