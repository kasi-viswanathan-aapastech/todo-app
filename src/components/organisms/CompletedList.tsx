import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CompletedTask from "../molecules/CompletedTask";
import { TaskType } from "./TaskField";

const CompletedList = () => {
  const [completedList, setCompletedList] = useState<TaskType[]>([]);
  const storageStatus = useSelector(
    (state: any) => state.storageUpdate.storageStatus
  );
  useEffect(() => {
    setCompletedList(JSON.parse(localStorage.getItem("completedList") || "[]"));
  }, [storageStatus]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
      }}
    >
      {completedList?.length > 0 && <h1>Finished Tasks</h1>}
      {completedList?.map((completed) => (
        <CompletedTask key={completed.id} task={completed.task} />
      ))}
    </div>
  );
};

export default CompletedList;
