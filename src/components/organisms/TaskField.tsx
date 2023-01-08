import React, { useEffect, useRef, useState } from "react";
import IconButton from "../atoms/IconButton";
import TextBox from "../atoms/TextBox";
import tick from "../../assests/icons/tick.png";
import { useSelector, useDispatch } from "react-redux";
import { clearRedact } from "../../redux/features/editTask";
import { updateStatus } from "../../redux/features/storageUpdate";
import { postToDo, putToDo } from "../../api";

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
      putToDo(editTask.id, value);
      dispatch(clearRedact());
      dispatch(updateStatus("Update Task"));
    } else {
      postToDo(value);
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
