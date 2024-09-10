import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <Navbar className="navbar-dark" expand="lg" variant="dark" bg="primary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Controle de Atendimento
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={(navData) => navData.isActive ? 'Active' : ''} as={NavLink} to="/Clientes/Lista">
              Clientes
            </Nav.Link>
            <Nav.Link className={(navData) => navData.isActive ? 'Active' : ''} as={NavLink} to="/Atividades/Lista">
              Atividades
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown align="end" title="Canechia" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Configurações
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
