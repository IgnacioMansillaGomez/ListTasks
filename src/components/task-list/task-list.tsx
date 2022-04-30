import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../../types/task";
import { TaskItem } from "../task-item/task-item";

import "./task-list.scss";

interface PropsTaskList {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTask: Task[];
  setCompletedTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList: React.FC<PropsTaskList> = ({
  tasks,
  setTasks,
  completedTask,
  setCompletedTask,
}) => {
  return (
    <section className="container">
      <Droppable droppableId="TaskList">
        {(provided) => (
          <div
            className="tasks"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="tasks__heading">Waiting to be completed</span>
            {tasks.map((task) => (
              <TaskItem
                task={task}
                key={task.id}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TaskListRemoved">
        {(provided) => (
          <div
            className="tasks completed"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="tasks__heading">C0mpleted Tasks</span>
            {tasks.map((task) => (
              <TaskItem
                task={task}
                key={task.id}
                tasks={completedTask}
                setTasks={setCompletedTask}
              />
            ))}
          </div>
        )}
      </Droppable>
    </section>
  );
};
