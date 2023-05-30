import { Routes, Route } from "react-router-dom";
import { TasksPages } from "./pages/TasksPages";
import { TasksForm } from "./pages/TasksForm";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import { TaskContextProvider } from "./context/TaskContext";
function App() {
  document.title = "MERN Tasks App";

  return (
    <div className="bg-dark vh-100 text-white">
      <TaskContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<TasksPages />} />
          <Route path="/new" element={<TasksForm />} />
          <Route path="/edit/:id" element={<TasksForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
    </div>
  );
}

export default App;
