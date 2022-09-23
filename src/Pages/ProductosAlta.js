import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Componentes/Input";
import {Form, Button} from 'react-bootstrap';
import firebase from "../Configuracion/firebase";

function ProductosAlta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
        await firebase.firestore().collection("productos").add({
        name: data.nombre,
        date: data.fecha,
        description: data.descripcion,
        /*img:data.imagen*/
      });
    } catch (e) {
    }
  };
  return (
    <div>
      <h2 style={{ color: "white", marginTop: "2%" }}>Nuevas Películas</h2>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ color: "white", marginRight: "45%" }}>
        <div>
          <Input
            label="Nombre"
            id="nombre"
            placeholder=""
            register={{ ...register("nombre", { required: true }) }}
          />
          {errors.nombre && <span>Este campo es obligatorio</span>}
          <Input
            label="Estreno"
            id="fecha"
            type="text"
            placeholder=""
            register={{ ...register("fecha", { required: true }) }}
          />
          {errors.nombre && <span>Este campo es obligatorio</span>}
          <Input
            label="Sinopsis"
            type="text"
            placeholder=""
            register={{ ...register("descripcion", { required: true }) }}
          />
          {errors.descripcion && <span>Este campo es obligatorio</span>}
          <Input
            label="Imagen"
            type="file"
            placeholder="Añade archivo"
            register={{ ...register("imagen") }}
          />
        </div>
        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default ProductosAlta;