// api.js
import axios from "axios";

// genérica para crear una entidad
export const createEntity = async (entityType, formData) => {
  try {
    const response = await axios.post(`/api/${entityType}`, formData, {
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
// genérica para obtener una lista de entidades
export const getEntities = async (entityType) => {
  try {
    const response = await axios.get(`/api/${entityType}`);

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
