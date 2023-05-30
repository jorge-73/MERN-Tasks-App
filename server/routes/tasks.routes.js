import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controllers.js";

const tasksRoutes = Router();

// Obtener todas las tareas
tasksRoutes.get("/tasks", getTasks);

// Obtener una tarea por su ID
tasksRoutes.get("/tasks/:id", getTask);

// Crear una nueva tarea
tasksRoutes.post("/tasks", createTask);

// Actualizar una tarea existente
tasksRoutes.put("/tasks/:id", updateTask);

// Eliminar una tarea
tasksRoutes.delete("/tasks/:id", deleteTask);

export default tasksRoutes;
