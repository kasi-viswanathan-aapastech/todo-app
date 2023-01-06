import React from "react";

type ToDoTaskType = {
  task?: string;
  doneClick?: () => void;
  editClick?: () => void;
  deleteClick?: () => void;
};

const ToDoTask = ({
  task,
  doneClick,
  editClick,
  deleteClick,
}: ToDoTaskType) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "60%",
        height: "6rem",
        margin: "9px 0px",
      }}
    >
      <div
        style={{
          fontSize: "3rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <b>{task}</b>
        <div>
          <button onClick={doneClick} style={{ marginRight: "5px" }}>
            Done
          </button>
          <button onClick={editClick} style={{ marginRight: "5px" }}>
            Edit
          </button>
          <button onClick={deleteClick} style={{ marginRight: "5px" }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoTask;
