import { Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import Carrinho from "../carrinho";

function Menu() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"> Loja Ingresso</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/eventos" Link to={"/eventos"}>
              {" "}
              Lista de Eventos
            </Nav.Link>
            <Nav.Link href="/cadastrar">Divulgue seu evento</Nav.Link>
            <Nav.Link href="/comprar">Finalizar compra</Nav.Link>
          </Nav>
          <Carrinho />
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Menu;
