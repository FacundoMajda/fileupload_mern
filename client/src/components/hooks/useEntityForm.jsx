// useEntityForm.js
import { useState } from "react";
import { createEntity } from "../../api/api";

const useEntityForm = (entityType) => {
  const initialFormData =
    entityType === "author"
      ? { firstName: "", lastName: "", biography: "" }
      : {
          title: "",
          genre: "",
          year: "",
          author: "",
          coverImage: null,
          biography: "",
        };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createEntity(entityType, formData);

      if (response) {
        console.log(`${entityType} agregado con éxito`, response);
      }
    } catch (error) {
      console.error(`Error al agregar ${entityType}`, error);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
  };
};

export default useEntityForm;
