import React from "react";

type CompletedTaskType = {
  task?: string;
};

const CompletedTask = ({ task }: CompletedTaskType) => {
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
        <b style={{ textDecoration: "line-through" }}>{task}</b>
      </div>
    </div>
  );
};

export default CompletedTask;
