import React from "react";
import TaskField from "../components/organisms/TaskField";
import CompletedList from "../components/organisms/CompletedList";
import ToDoList from "../components/organisms/ToDoList";

const HomePage = () => {
  return (
    <div>
      <TaskField />
      <ToDoList />
      <CompletedList />
    </div>
  );
};

export default HomePage;
