import winston from "winston";

// Configuración de Winston
export const logger = winston.createLogger({
  level: "info", // Nivel de registro
  format: winston.format.combine(
    // winston.format.timestamp(), // Agregar marca de tiempo
    winston.format.json() // Formato JSON
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // Colorear la salida en la consola
        winston.format.simple() // Formato simple en la consola
      ),
    }), // Registro en la consola
    new winston.transports.File({
      filename: "error.log",
      level: "error",
      format: winston.format.combine(
        // winston.format.timestamp(), // Agregar marca de tiempo
        winston.format.json() // Formato JSON
      ),
    }), // Registro en un archivo de errores
    new winston.transports.File({
      filename: "combined.log",
      format: winston.format.combine(
        // winston.format.timestamp(), // Agregar marca de tiempo
        winston.format.json() // Formato JSON
      ),
    }), // Registro en un archivo combinado
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: "exceptions.log",
      format: winston.format.combine(
        // winston.format.timestamp(), // Agregar marca de tiempo
        winston.format.json() // Formato JSON
      ),
    }), // Registro de excepciones en un archivo
  ],
  exitOnError: false, // No salir de la aplicación en caso de errores
});
