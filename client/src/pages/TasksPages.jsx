import { useEffect } from "react";
import { TaskCard } from "../components/TaskCard.jsx";
import { useTasks } from "../context/TaskContext.jsx";

export const TasksPages = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  const renderMain = () => {
    if (tasks.length === 0) return <h1>No Tasks Yet</h1>;

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Tasks</h1>
      <div className="row">
      {renderMain()}
      </div>
    </div>
  );
};
