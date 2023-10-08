// Manejador de errores de validación de Mongoose
export const handleValidationError = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = {};
    for (const key in err.errors) {
      errors[key] = err.errors[key].message;
    }
    return res.status(400).json({ errors });
  }
  next(err);
};

// Manejador de errores de conversión de tipos de Mongoose
export const handleCastError = (err, req, res, next) => {
  if (err.name === "CastError") {
    return res.status(400).json({ message: "ID inválido" });
  }
  next(err);
};
