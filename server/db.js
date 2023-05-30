import { createPool } from "mysql2/promise";

// Crear un pool de conexiones a la base de datos
export const pool = createPool({
  host: "localhost",      // Dirección del servidor de la base de datos
  port: 3306,             // Puerto de la base de datos
  user: "root",           // Nombre de usuario de la base de datos
  password: "jorgepassword",   // Contraseña de la base de datos
  database: "tasksdb"     // Nombre de la base de datos
});

