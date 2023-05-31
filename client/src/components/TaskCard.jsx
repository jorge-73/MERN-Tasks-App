import { useTasks } from "../context/TaskContext.jsx";
import { useNavigate } from "react-router-dom";

const URL_IMG =
  "https://geekflare.com/wp-content/uploads/2022/02/Traditional-to-do-list-944x628.jpg";

export const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <>
      {/* <div className="border-light text-center col-md-3 border p-3">
        <div className="card-header">
          <h4>{task.title}</h4>
        </div>
        <div className="card-body">
          <p>{task.description}</p>
          <span>{task.done === 1 ? "✔️" : "❌"}</span>
          <span>{task.createAt}</span>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button
            className="btn btn-danger"
            onClick={() => deleteTask(task.id)}
          >
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
      </div> */}

      <div className="card card-custom border-white border-light text-center col-md-3 border p-3">
        <div
          className="card-custom-img"
          style={{
            backgroundImage:
              "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
          }}
        ></div>
        <div className="card-custom-avatar">
          <img
            className="img-fluid rounded-3"
            src={URL_IMG}
            alt="Avatar"
          />
        </div>
        <div className="card-body" style={{ overflowY: "auto" }}>
          <h4 className="card-title">{task.title}</h4>
          <p className="card-text">{task.description}</p>
          <span>{task.done === 1 ? "✔️" : "❌"}</span>
          <span>{task.createAt}</span>
        </div>
        <div
          className="card-footer"
          style={{ background: "inherit", borderColor: "inherit" }}
        >
          <button
            className="btn btn-danger"
            onClick={() => deleteTask(task.id)}
          >
            🗑️
          </button>
          <button
            className="btn btn-info mx-1"
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
    </>
  );
};
