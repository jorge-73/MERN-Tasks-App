import { useTasks } from "../context/TaskContext.jsx";
import { useNavigate } from "react-router-dom";

export const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="border-light text-center col-md-3 border p-3" /* style={{maxWidth:"20rem"}} */>
      <div className="card-header">
      <h4>{task.title}</h4>
      </div>
      <div className="card-body">
        <p>{task.description}</p>
        <span>{task.done === 1 ? "✔️" : "❌"}</span>
        <span>{task.createAt}</span>
      </div>
      <div className="card-footer d-flex justify-content-center">
      <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
          🗑️
        </button>
        <button
          className="btn btn-info"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          🖊️
        </button>
        <button
          className="btn btn-light"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
};
