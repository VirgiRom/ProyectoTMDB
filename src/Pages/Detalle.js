import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getByIdProductos} from '../Services/ProductosServices'
import {Card, Button} from 'react-bootstrap'
import Loading from '../Componentes/Loading'

function Detalle() {
  const { id } = useParams(); //lo mismo que se puso despues de los : de Link
  const [buscarId, setBuscarId] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const hola = await getByIdProductos(id);
        setBuscarId(hola.data);
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
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${buscarId.backdrop_path}`}
        />
        <Card.Body style={{ background: "#fcebdc" }}>
          <Card.Title>{buscarId?.title}</Card.Title>
          <Card.Text style={{ fontSize: "18px" }}>
            {buscarId?.overview} (ID: {buscarId?.id})
          </Card.Text>
          <Button variant="success">Ver</Button>
        </Card.Body>
      </Card>
    </Loading>
  );
}
export default Detalle;