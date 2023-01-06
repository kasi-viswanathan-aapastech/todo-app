import React, { useState, useEffect } from "react";
import ToDoTask from "../molecules/ToDoTask";
import { TaskType } from "./TaskField";
import { useDispatch, useSelector } from "react-redux";
import { redactTask } from "../../redux/features/editTask";
import { updateStatus } from "../../redux/features/storageUpdate";

const ToDoList = () => {
  const dispatch = useDispatch();
  const storageStatus = useSelector(
    (state: any) => state.storageUpdate.storageStatus
  );

  const [toDoList, setToDoList] = useState<TaskType[]>([]);

  useEffect(() => {
    setToDoList(JSON.parse(localStorage.getItem("toDoList") || "[]"));
  }, [storageStatus]);

  const handleDone = (todo: TaskType) => {
    const hasList = localStorage.getItem("completedList") !== null;
    if (hasList) {
      let completedList = JSON.parse(
        localStorage.getItem("completedList") || ""
      );
      let doneTask: TaskType = todo;
      completedList.push(doneTask);
      localStorage.setItem("completedList", JSON.stringify(completedList));
    } else {
      let completedList = [];
      let newTask: TaskType = todo;
      completedList.push(newTask);
      localStorage.setItem("completedList", JSON.stringify(completedList));
    }
    handleDelete(todo);
    dispatch(updateStatus("Done Task"));
  };

  const handleEdit = (todo: TaskType) => {
    dispatch(redactTask(todo));
    dispatch(updateStatus("Edit Task"));
  };

  const handleDelete = (todo: TaskType) => {
    let toDoList = JSON.parse(localStorage.getItem("toDoList") || "");
    toDoList = toDoList.filter((task: TaskType) => task.id !== todo.id);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    dispatch(updateStatus("Delete Task"));
  };

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
      {toDoList?.length > 0 && <h1>ToDo List</h1>}
      {toDoList?.map((todo) => (
        <ToDoTask
          key={todo.id}
          task={todo.task}
          doneClick={() => handleDone(todo)}
          editClick={() => handleEdit(todo)}
          deleteClick={() => handleDelete(todo)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
