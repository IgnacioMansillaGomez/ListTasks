import React, { useEffect, useRef, useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task.toString());
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="task__item" onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input
          value={editTask}
          ref={inputRef}
          onChange={(e) => setEditTask(e.target.value)}
          className="task__item-text "
        />
      ) : task.done ? (
        <s className="task__item-text-done">{task.task}</s>
      ) : (
        <span className="task__item-text">{task.task}</span>
      )}

      <div>
        <span className="icon">
          <FaPencilAlt onClick={() => !edit && setEdit(!edit)} />
        </span>
        <span className="icon">
          <FaTrashAlt onClick={() => handleDelete(task.id)} />
        </span>
        <span className="icon">
          <MdDoneAll onClick={() => handleDone(task.id)} />
        </span>
      </div>
    </form>
  );
};
