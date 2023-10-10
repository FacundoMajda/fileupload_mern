import { logger } from "./logger.js";

export const handleValidationError = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = {};
    for (const key in err.errors) {
      errors[key] = err.errors[key].message;
    }
    logger.error("Error de validación:", errors);
    return res.status(400).json({ errors });
  }
  next(err);
};

export const handleCastError = (err, req, res, next) => {
  if (err.name === "CastError") {
    logger.error("Error de conversión de tipos:", err.message);
    return res.status(400).json({ message: "ID inválido" });
  }
  next(err);
};

// Middleware de manejo de errores personalizado
export const errorHandler = (err, req, res, next) => {
  logger.error(`Error en la URL: ${req.url}`);
  logger.error(`Método HTTP: ${req.method}`);
  logger.error(`Tipo de Error: ${err.name}`);
  logger.error(`Mensaje de Error: ${err.message}`);
  logger.error(err.stack);

  // Verifica si el error es una instancia de Error
  if (err instanceof Error) {
    // Manejo de errores específicos según el tipo de error
    if (err.name === "ValidationError") {
      const errors = {};
      for (const key in err.errors) {
        errors[key] = err.errors[key].message;
      }
      logger.error("Error de validación:", errors);
      return res.status(400).json({ errors });
    } else if (err.name === "CastError") {
      logger.error("Error de conversión de tipos:", err.message);
      return res.status(400).json({ message: "ID inválido" });
    } else {
      logger.error("Error del servidor:", err.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  } else {
    // Si no es una instancia de Error, se considera un error desconocido
    logger.error("Error desconocido:", err);
    return res.status(500).json({ error: "Error desconocido" });
  }
};
