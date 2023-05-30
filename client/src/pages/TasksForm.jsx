import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const TasksForm = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{minHeight:"80vh"}}>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
          }
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <div class="col-md-4 p-3 border border-light rounded-3">
            <div className="card-header text-center">
              <h1>{params.id ? "Edit Task" : "New Task"}</h1>
            </div>
            <Form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Write a title..."
                  onChange={handleChange}
                  value={values.title}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  rows="3"
                  placeholder="Write a description..."
                  onChange={handleChange}
                  value={values.description}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary form-control"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
