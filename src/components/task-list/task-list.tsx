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
            {tasks.map((task, index) => (
              <TaskItem
                index={index}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                key={task.id}
              />
            ))}
            {provided.placeholder}
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
            {completedTask.map((task, index) => (
              <TaskItem
                index={index}
                task={task}
                tasks={completedTask}
                setTasks={setCompletedTask}
                key={task.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </section>
  );
};
