import winston from "winston";
import { fileURLToPath } from "url";
import path from "path";

//ruta a carpeta logs /server/logs
const file_path = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "logs"
);

// Configuración de Winston
export const logger = winston.createLogger({
  level: "info", // Nivel de registro
  format: winston.format.combine(
    // winston.format.timestamp(), // Agregar marca de tiempo (opcional)
    winston.format.json() // Formato JSONm
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // Colorear la salida en la consola
        winston.format.simple() // Formato simple en la consola
      ),
    }), // Registro en la consola
    new winston.transports.File({
      filename: path.join(file_path, "error.log"), // Ruta del archivo de registro de errores
      level: "error", // Nivel de registro para este transporte
      format: winston.format.combine(
        // winston.for2mat.timestamp(), // Agregar marca de tiempo (opcional)
        winston.format.json() // Formato JSON
      ),
    }), // Registro en un archivo de errores
    new winston.transports.File({
      filename: path.join(file_path, "combined.log"), // Ruta del archivo de registro combinado
      format: winston.format.combine(
        // winston.format.timestamp(), // Agregar marca de tiempo (opcional)
        winston.format.json() // Formato JSON
      ),
    }), // Registro en un archivo combinado
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(file_path, "exceptions.log"), // Ruta del archivo de registro de excepciones
      format: winston.format.combine(
        // winston.format.timestamp(), // Agregar marca de tiempo (opcional)
        winston.format.json() // Formato JSON
      ),
    }), // Registro de excepciones en un archivo
  ],
  exitOnError: false, // No salir de la aplicación en caso de errores
});
