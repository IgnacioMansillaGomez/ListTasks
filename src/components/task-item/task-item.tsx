import React from "react";
import { Task } from "../../types/task";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";

import "./task-item.scss";

interface Props {
  task: Task;
  key: number;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskItem: React.FC<Props> = ({ task, key, tasks, setTasks }) => {
  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <form className="task__item">
      <span className="task__item-text">{task.task}</span>
      <div>
        <span className="icon">
          <FaPencilAlt />
        </span>
        <span className="icon">
          <FaTrashAlt />
        </span>
        <span className="icon">
          <MdDoneAll onClick={() => handleDone(task.id)} />
        </span>
      </div>
    </form>
  );
};
