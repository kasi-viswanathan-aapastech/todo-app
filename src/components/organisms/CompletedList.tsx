import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCompletedList } from "../../api/CompletedTasksAPI";
import CompletedTask from "../molecules/CompletedTask";
import { TaskType } from "./TaskField";

const CompletedList = () => {
  const [completedList, setCompletedList] = useState<TaskType[]>([]);
  const storageStatus = useSelector(
    (state: any) => state.storageUpdate.storageStatus
  );

  const getCompleted = async () => {
    const toDos = await getCompletedList();
    if (Array.isArray(toDos)) setCompletedList(toDos);
  };

  useEffect(() => {
    getCompleted();
  }, [completedList]);

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
