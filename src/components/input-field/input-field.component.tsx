import React, { useState } from "react";

import "./input-field.css";

interface Props {
  task: string | number;
  setTask: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.SyntheticEvent) => void;
}

export const InputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
  return (
    <div className="input">
      <input
        type="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task..."
        className="input__box"
      />
      <button type="button" className="button-submit" onClick={handleAdd}>
        GO
      </button>
    </div>
  );
};
