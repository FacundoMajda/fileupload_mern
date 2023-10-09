import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import path from "path";
import { connectToMongoDB } from "./config/db.js";
import helmet from "helmet";

//routes
import authorRoutes from "./routes/author.routes.js";
import bookRoutes from "./routes/book.routes.js";

//module error handler
import {
  handleValidationError,
  handleCastError,
} from "./modules/errorhandler.js";
import { contentSecurityPolicy } from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;
const currentDate = new Date().toLocaleString();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(handleValidationError);
app.use(handleCastError);
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// static client
app.use(express.static(path.join(import.meta.url, "../client/build")));

//config perrona
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Archivo excede tamaño máximo",
    parseNested: true,
    debug: true,
  })
);

// api routess
app.use("/api", authorRoutes);
app.use("/api", bookRoutes);

// // uploader route
// app.post("/", function (req, res) {
//   if (!req.files || Object.keys(req.files).length === 0) {
//     const errorMessage = "No se han cargado archivos";
//     console.error(errorMessage);
//     return res.status(400).send(errorMessage);
//   }

//   const sampleFile = req.files.sampleFile;
//   const uploadPath = path.join(
//     import.meta.url,
//     "./library/images" + sampleFile.name
//   );

//   //  método mv()
//   sampleFile.mv(uploadPath, (err) => {
//     if (err) {
//       const errorMessage = `Error al subir archivo: ${err.message}`;
//       console.error(errorMessage);
//       return res.status(500).send(errorMessage);
//     }

//     const successMessage = `Archivo subido: ${sampleFile.name} - ${currentDate}`;
//     console.log(successMessage);
//     res.send(successMessage);
//   });
// });

// 404
app.use((req, res, next) => {
  const errorMessage = "Página no encontrada";
  console.error(errorMessage);
  res.status(404).send(errorMessage);
});

// 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Error del servidor: ${err.message}`);
});

// Ruta para la vista principal de la aplicación React
app.get("*", (req, res) => {
  res.sendFile(path.join(import.meta.url, "../client/build/index.html"));
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(import.meta.url, "../client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(
    `Servidor en ejecución en http://localhost:${PORT} - ${currentDate}`
  );
  connectToMongoDB();
});
