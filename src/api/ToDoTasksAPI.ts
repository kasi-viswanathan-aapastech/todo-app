import { TaskType } from "../components/organisms/TaskField";

let toDoList: TaskType[] = JSON.parse(localStorage.getItem("toDoList") || "[]");

const setToDoList = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(localStorage.setItem("toDoList", JSON.stringify(toDoList)));
    }, 1000);
  });
  return promise;
};

export const getToDoList = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(toDoList);
    }, 1000);
  });
  return promise;
};

export const postToDo = (task: string) => {
  let newTask: TaskType = {
    id: 1,
    task: task,
  };
  const hasTask = localStorage.getItem("taskNo") !== null;
  if (hasTask) {
    let taskNo = parseInt(localStorage.getItem("taskNo")!) + 1;
    localStorage.setItem("taskNo", taskNo.toString());
    newTask = {
      id: taskNo,
      task: task,
    };
  } else {
    localStorage.setItem("taskNo", "1");
  }
  toDoList.push(newTask);
  return setToDoList();
};

export const putToDo = (id: number, task: string) => {
  toDoList = toDoList.map((todo: TaskType) =>
    todo.id === id ? { id, task } : todo
  );
  return setToDoList();
};

export const deleteToDo = (id: number) => {
  toDoList = toDoList.filter((task: TaskType) => task.id !== id);
  return setToDoList();
};
