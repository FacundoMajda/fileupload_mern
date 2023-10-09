import "dotenv/config";
import axios from "axios";

const PORT = "3000";
const URL = "http://127.0.0.1";

const BACKEND_URL = `${URL}:${PORT}`;

const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Función genérica para crear una entidad
export const createEntity = async (entityType, formData) => {
  try {
    const response = await api.post(`/${entityType}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error al agregar ${entityType}`);
    }
  } catch (error) {
    console.error(`Error al agregar ${entityType}`, error);
    throw error;
  }
};

// Función genérica para obtener una lista de entidades
export const getEntities = async (entityType) => {
  try {
    const response = await api.get(`/${entityType}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error al obtener la lista de ${entityType}`);
    }
  } catch (error) {
    console.error(`Error al obtener la lista de ${entityType}`, error);
    throw error;
  }
};
