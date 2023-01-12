import { TaskType } from "../components/organisms/TaskField";

let completedList: TaskType[] = JSON.parse(
  localStorage.getItem("completedList") || "[]"
);

const setCompletedList = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        localStorage.setItem("completedList", JSON.stringify(completedList))
      );
    }, 1000);
  });
  return promise;
};

export const getCompletedList = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(completedList);
    }, 1000);
  });
  return promise;
};

export const postCompleted = (task: TaskType) => {
  completedList.push(task);
  return setCompletedList();
};

export const resetCompletedList = () => {
  completedList = [];
};
