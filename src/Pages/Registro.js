import React,{ useState }  from "react";
import { useForm } from "react-hook-form";
import Input from "../Componentes/Input";
import {Form, Button} from 'react-bootstrap';
import firebase from "../Configuracion/firebase";
import Alert from "../Componentes/Alert";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alerta, setAlerta] = useState({ variant: "", text: "" });
  const onSubmit = async (data) => {
    console.log("form", data);
    try {
      const usuariosAut = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      if (usuariosAut.user.uid) {
        const datosUsuario = await firebase
          .firestore()
          .collection("usuarios")
          .add({
            name: data.nombre,
            lastname: data.apellido,
            userId: usuariosAut.user.uid,
          });
        if (datosUsuario) {
          setAlerta({
            variant: "success",
            text: "Te has registrado con éxito",
          });
        }
      }
    } catch (e) {
    }
  };
  return (
    <div>
      <h2 style={{ color: "white", marginTop: "2%" }}>Formulario Registro</h2>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ color: "white", marginRight: "45%" }}
      >
        <div>
          <Input
            label="Nombre"
            id="nombre"
            placeholder="Como figura en DNI"
            register={{ ...register("nombre", { required: true }) }}
          />
          {errors.nombre && <span>Este campo es obligatorio</span>}

          <Input
            label="Apellido"
            placeholder="Como figura en DNI"
            register={{ ...register("apellido", { required: true }) }}
          />
          {errors.apellido && <span>Este campo es obligatorio</span>}
          <Input
            label="Email"
            type="email"
            placeholder="ingresesumail@gmail.com"
            register={{ ...register("email", { required: true }) }}
          />
          {errors.email && <span>Este campo es obligatorio</span>}
          <Input
            label="Telefono"
            type="number"
            placeholder="+541155555555"
            register={{ ...register("telefono", { required: true }) }}
          />
          <small id="numberHelp">(Código de Area) 15 + Número</small>
          {errors.telefono && <span>Este campo es obligatorio</span>}
          <Input
            label="Contraseña"
            type="password"
            placeholder="**********"
            register={{ ...register("password", { required: true }) }}
          />
          {errors.password && <span>Este campo es obligatorio</span>}
          <Input
            label="Confirmar Contraseña"
            type="password"
            placeholder="**********"
            register={{ ...register("contraseña", { required: true }) }}
          />
          {errors.contraseña && <span>Este campo es obligatorio</span>}
        </div>
        <Button variant="success" type="submit">
          Registrate
        </Button>
        <Alert variant={alerta.variant} text={alerta.text} />
      </Form>
    </div>
  );
}
export default Registro;