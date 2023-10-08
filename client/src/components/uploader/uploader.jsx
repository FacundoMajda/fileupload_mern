import React, { useEffect, useState } from "react";

const FileUploader = () => {
  const [uploader, setUploader] = useState(null);
  const [isUploaderInitialized, setIsUploaderInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const API_KEY = "free";

  // Función para inicializar el Uploader
  const initializeUploader = async () => {
    try {
      const { Uploader } = await import("uploader");
      const uploaderInstance = Uploader({ apiKey: API_KEY });
      setUploader(uploaderInstance);
      setIsUploaderInitialized(true);
    } catch (error) {
      console.error("Error al inicializar el uploader:", error);
    }
  };

  useEffect(() => {
    initializeUploader();
  }, []);

  // Función para manejar la subida de archivos
  const handleUpload = async () => {
    setIsLoading(true);
    setUploadError(null);

    try {
      if (!uploader) {
        setUploadError("El uploader no está inicializado.");
        return;
      }

      const files = await uploader.open({ multi: true });

      if (files.length === 0) {
        setUploadError("No se han seleccionado archivos.");
      } else {
        setUploadedFiles(files);
      }
    } catch (error) {
      setUploadError("Error al subir archivos.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isUploaderInitialized ? (
        <div>
          {isLoading && <p>Cargando...</p>}
          {uploadError && <p>Error: {uploadError}</p>}
          {uploadedFiles.length > 0 && (
            <div>
              <p>Archivos subidos:</p>
              <ul>
                {uploadedFiles.map((file) => (
                  <li key={file.fileUrl}>{file.fileUrl}</li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={handleUpload} disabled={isLoading}>
            Subir Archivos
          </button>
        </div>
      ) : (
        <p>Inicializando el Uploader...</p>
      )}
    </div>
  );
};

export default FileUploader;
