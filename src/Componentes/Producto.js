import {Link} from 'react-router-dom'
import {Card, Button, Col} from 'react-bootstrap'

function Producto(props) {
  console.log("Props", props);
  const { nombre, fecha, backdrop_path, id } = props;
  return (
    <>
      <Col>
        <Card style={{ width: "18rem", marginBlockEnd: "3%", marginTop: "3%" }}>
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
          />
          <Card.Body style={{ background: "#fcebdc" }}>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>Fecha de Estreno: {fecha}</Card.Text>
            <Button variant="success" as={Link} to={"/producto/" + id}>
              SINOPSIS
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default Producto;