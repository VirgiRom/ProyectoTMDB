import {Link} from 'react-router-dom'
import {Card, Button, Col} from 'react-bootstrap'

function ProductoFirebase(props) {
  const { nombre, fecha, id, imagen } = props;
  return (
    <>
      <Col>
        <Card style={{ width: "18rem", marginBlockEnd: "3%", marginTop: "3%" }}>
          <Card.Img variant="top" src={imagen} />
          <Card.Body style={{ background: "#fcebdc" }}>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>Fecha de Estreno: {fecha}</Card.Text>
            <Button
              variant="success"
              as={Link}
              to={"/productos/" + id}
              style={{ marginRight: "1.5%" }}
            >
              SINOPSIS
            </Button>
            <Button
              variant="success"
              as={Link}
              to={"/productos/modificar/" + id}
              style={{ borderColor: "red", borderWidth: "2.5px" }}
            >
              Actualizar
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default ProductoFirebase;