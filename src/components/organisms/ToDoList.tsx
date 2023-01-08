import React, { useState, useEffect } from "react";
import ToDoTask from "../molecules/ToDoTask";
import { TaskType } from "./TaskField";
import { useDispatch, useSelector } from "react-redux";
import { redactTask } from "../../redux/features/editTask";
import { updateStatus } from "../../redux/features/storageUpdate";
import { deleteToDo, getToDoList } from "../../api/ToDoTasksAPI";
import { postCompleted } from "../../api/CompletedTasksAPI";

const ToDoList = () => {
  const dispatch = useDispatch();
  const storageStatus = useSelector(
    (state: any) => state.storageUpdate.storageStatus
  );

  const [toDoList, setToDoList] = useState<TaskType[]>([]);

  const getToDos = async () => {
    const toDos = await getToDoList();
    if (Array.isArray(toDos)) setToDoList(toDos);
  };

  const handleDone = async (todo: TaskType) => {
    await postCompleted(todo);
    handleDelete(todo);
    dispatch(updateStatus("Done Task"));
  };

  const handleEdit = async (todo: TaskType) => {
    dispatch(redactTask(todo));
    dispatch(updateStatus("Edit Task"));
    getToDos();
  };

  const handleDelete = async (todo: TaskType) => {
    await deleteToDo(todo.id);
    dispatch(updateStatus("Delete Task"));
    getToDos();
  };

  useEffect(() => {
    getToDos();
  }, [toDoList]);

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
