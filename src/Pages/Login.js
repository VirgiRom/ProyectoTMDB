import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Componentes/Input";
import {Form, Button} from 'react-bootstrap';
import firebase from "../Configuracion/firebase";
import Alert from "../Componentes/Alert";
import {LoginMj} from "../Utils/ErrorMj"

function Login(props) {
  const { setLogin } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alerta, setAlerta] = useState({ variant: "", text: "" });
  const onSubmit = async (data) => {
    try {
      const usuariosAut = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      if (usuariosAut.user.uid) {
        const userInfo = await firebase
          .firestore()
          .collection("usuarios")
          .where("userId", "==", usuariosAut.user.uid)
          .get();
        if (userInfo) {
          const nombre = userInfo.docs[0]?.data().name;
          setLogin(true);
          setAlerta({
            variant: "success",
            text: "Bienvenid@ " + (nombre || ""),
          });
        }
      }
    } catch (e) {
      setAlerta({
        variant: "danger",
        text: LoginMj[e.code] || "Ha ocurrido un error",
      });
    }
  };
  return (
    <div>
      <h2 style={{ color: "white", marginTop: "2%" }}>Inicio de Sesión</h2>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ color: "white", marginRight: "45%" }}>
        <Input
          label="Email"
          type="email"
          placeholder="ingresesumail@gmail.com"
          register={{ ...register("email", { required: true }) }}
        />
        {errors.email && <span>Este campo es obligatorio</span>}
        <div>
          <Input
            label="Contraseña"
            type="password"
            placeholder="**********"
            register={{ ...register("password", { required: true }) }}
          />
          {errors.password && <span>Este campo es obligatorio</span>}
        </div>
        <Button variant="success" type="submit">
          Ingresá
        </Button>
        <Alert variant={alerta.variant} text={alerta.text} />
      </Form>
    </div>
  );
}

export default Login;