import React from "react";
import { Task } from "../../types/task";

interface PropsTaskList {
  tasks: Task[];
}

export const TaskList: React.FC<PropsTaskList> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((element) => {
        return <li key={element.id}>{element.task}</li>;
      })}
    </div>
  );
};
