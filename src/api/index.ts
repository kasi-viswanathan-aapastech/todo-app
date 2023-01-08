import { TaskType } from "../components/organisms/TaskField";

const toDoList: TaskType[] = JSON.parse(
  localStorage.getItem("toDoList") || "[]"
);

export const getToDos = () => {
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

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(localStorage.setItem("toDoList", JSON.stringify(toDoList)));
    }, 1000);
  });
  return promise;
};

export const putToDo = (id: number, task: string) => {
  const updatedToDoList: TaskType[] = toDoList.map((todo: TaskType) =>
    todo.id === id ? { id, task } : todo
  );

  console.log(updatedToDoList);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        localStorage.setItem("toDoList", JSON.stringify(updatedToDoList))
      );
    }, 1000);
  });
  return promise;
};
