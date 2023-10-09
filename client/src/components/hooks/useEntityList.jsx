import { useState, useEffect } from "react";
import { getEntities } from "../../api/api";

const useEntityList = (entityType) => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const data = await getEntities(entityType);
        setEntities(data);
      } catch (error) {
        console.error(`Error al obtener la lista de ${entityType}`, error);
      }
    };

    fetchEntities();
  }, [entityType]);

  return entities;
};

export default useEntityList;
