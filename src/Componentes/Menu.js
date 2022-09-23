import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Login from '../Pages/Login'

const styles = {
  navbar: {
    background: "#35DCA7",
    fontSize: "18px",
    color: "white",
  },
  brand: {
    fontSize: "30px",
    marginLeft: "10px",
  },
  link: {
    color: "black",
  },
};
function Menu(props) {
  const { login } = props;
  return (
    <div>
      <Navbar style={styles.navbar} bg="" expand="lg">
        <Navbar.Brand style={styles.brand} as={Link} to="/">
          T M D B
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={styles.link} as={Link} to="/">
              Inicio
            </Nav.Link>
            {login && (
              <>
                <Nav.Link style={styles.link} as={Link} to="/home">
                  Películas Extranjeras
                </Nav.Link>
                <Nav.Link style={styles.link} as={Link} to="/alta">
                  Registro
                </Nav.Link>
                {/* <Nav.Link style={styles.link} as={Link} to="/homeFire">
                  Pélis Nacionales (Firebase)
                </Nav.Link> */}
                <NavDropdown title="Estrenos" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/productos/alta">
                    Alta nuevas películas
                  </NavDropdown.Item>
                  <NavDropdown.Item></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  style={styles.link}
                  as={Link}
                  to="/"
                  onClick={() => Login()}
                >
                  Salir
                </Nav.Link>
              </>
            )}
            {!login && (
              <>
                <Nav.Link style={styles.link} as={Link} to="/alta">
                  Registrate
                </Nav.Link>
                <Nav.Link style={styles.link} as={Link} to="/ingresar">
                  Ingresá
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Menu;