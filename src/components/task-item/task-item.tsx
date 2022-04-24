import React from "react";
import { Task } from "../../types/task";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";

interface Props {
  task: Task;
  key: number;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskItem: React.FC<Props> = ({ task, key, tasks, setTasks }) => {
  return (
    <form className="task__item">
      <div className="asd">
        <span className="task__item-text">{task.task}</span>
        <FaPencilAlt />
        <FaTrashAlt />
        <MdDoneAll />
      </div>
    </form>
  );
};
