import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getByIdProductosFirebase } from '../Services/ProductosServices'
import {Card, Button} from 'react-bootstrap'
import Loading from '../Componentes/Loading'

function DetalleFirebase() {
  const { id } = useParams(); //lo mismo que se puso despues de los : de Link
  const [buscarId, setBuscarId] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const fire = await getByIdProductosFirebase(id);
        setBuscarId(fire.data());
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    request();
  }, [id]);
  return (
    <Loading loading={loading}>
      <Card style={{ marginTop: "1%", width: "50%", marginLeft: "25%" }}>
        <Card.Img variant="top" src={buscarId?.img} />
        <Card.Body style={{ background: "#fcebdc" }}>
          <Card.Title>{buscarId?.name}</Card.Title>
          <Card.Title>{buscarId?.date}</Card.Title>
          <Card.Text style={{ fontSize: "18px" }}>
            {buscarId?.description}
          </Card.Text>
          <Button variant="success">Ver</Button>
        </Card.Body>
      </Card>
    </Loading>
  );
}
export default DetalleFirebase;