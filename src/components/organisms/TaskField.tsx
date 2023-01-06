import React, { useEffect, useRef, useState } from "react";
import IconButton from "../atoms/IconButton";
import TextBox from "../atoms/TextBox";
import tick from "../../assests/icons/tick.png";
import { useSelector, useDispatch } from "react-redux";
import { clearRedact } from "../../redux/features/editTask";
import { updateStatus } from "../../redux/features/storageUpdate";

export type TaskType = {
  id: number;
  task: string;
};

const TaskField = () => {
  const editTask = useSelector((state: any) => state.editTask);
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    setValue(editTask.task);
  }, [editTask]);

  const handleTask = () => {
    if (editTask.id !== 0) {
      let toDoList = JSON.parse(localStorage.getItem("toDoList") || "");
      toDoList = toDoList.map((todo: TaskType) =>
        todo.id === editTask.id ? { id: todo.id, task: value } : todo
      );
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
      dispatch(clearRedact());
      dispatch(updateStatus("Update Task"));
    } else {
      const hasTask = localStorage.getItem("taskNo") !== null;
      if (hasTask) {
        let toDoList = JSON.parse(localStorage.getItem("toDoList") || "");
        let taskNo = parseInt(localStorage.getItem("taskNo")!) + 1;
        localStorage.setItem("taskNo", taskNo.toString());
        let newTask: TaskType = {
          id: taskNo,
          task: value,
        };
        toDoList.push(newTask);
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
      } else {
        localStorage.setItem("taskNo", "1");
        let toDoList = [];
        let newTask: TaskType = { id: 1, task: value };
        toDoList.push(newTask);
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
      }
      dispatch(updateStatus("New Task"));
    }
    setValue("");
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
    >
      <TextBox
        value={value}
        enterPress={handleTask}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        ref={inputRef}
      />
      <IconButton src={tick} onClick={handleTask} size={55} />
      <button
        onClick={() => {
          localStorage.clear();
          dispatch(updateStatus("Delete All"));
        }}
      >
        Delete All
      </button>
    </div>
  );
};

export default TaskField;
