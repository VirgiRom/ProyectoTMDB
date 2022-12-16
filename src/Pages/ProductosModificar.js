import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import Input from "../Componentes/Input";
import {Form, Button} from 'react-bootstrap';
import firebase from "../Configuracion/firebase";
import {useParams} from 'react-router-dom';
import { getByIdProductosFirebase, update } from '../Services/ProductosServices'

function ProductosModificar() {
  const { register, handleSubmit, setValue } = useForm();
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        const cambios = await getByIdProductosFirebase(id);
        setValue("nombre", cambios.data().name);
        setValue("fecha", cambios.data().date);
        setValue("descripcion", cambios.data().description);
        setValue("imagen", cambios.data().img);
      } catch (e) {
      }
    };
    request();
  }, [id, setValue]);
  const onSubmit = async (data) => {
      const datos = {
      name: data.nombre,
      description: data.descripcion,
      date: data.fecha,
      img: data.imagen,
    };
    try {
      await update(id, datos);
    } catch (e) {}
  };
  const handleDelete = async () => {
    await firebase
      .firestore()
      .doc("productos/" + id)
      .delete();
  };
  return (
    <div>
      <h2 style={{ color: "white", marginTop: "2%" }}>Actualizar Películas</h2>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ color: "white", marginRight: "45%" }} >
        <div>
          <Input
            label="Nombre"
            id="nombre"
            placeholder=""
            register={{ ...register("nombre") }}
          />
          <Input
            label="Estreno"
            id="fecha"
            type="text"
            placeholder=""
            register={{ ...register("fecha") }}
          />
          <Input
            label="Sinopsis"
            type="text"
            placeholder=""
            register={{ ...register("descripcion") }}
          />
        </div>
        <Button variant="success" type="submit" style={{ marginRight: "1%" }}>
          Modificar
        </Button>
        <Button variant="danger" type="submit" onClick={handleDelete}>
          Eliminar
        </Button>
      </Form>
    </div>
  );
}
export default ProductosModificar;