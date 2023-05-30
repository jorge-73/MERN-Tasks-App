import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRouter from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

// CORS: Esto permitirá que los clientes realicen solicitudes desde dominios diferentes al del servidor, lo que es útil para evitar restricciones de política de mismo origen (Same-Origin Policy). CORS (Cross-Origin Resource Sharing) agrega encabezados HTTP a las respuestas para permitir que los navegadores accedan a los recursos desde un origen diferente.
app.use(cors());

app.use(express.json());

// Ruta principal
app.use(indexRouter);
// Rutas de tareas
app.use(tasksRoutes);

// Iniciar el servidor
app.listen(PORT);
// Mostrar mensaje de inicio del servidor
console.log("Server is running on port", PORT);
