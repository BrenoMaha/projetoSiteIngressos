import { Form, Button, InputGroup } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function FormularioEventos() {
  return (
    <div
      style={{
        display: "block",
        width: "40vh",
        padding: 30,
        backgroundColor: "white",
        borderRadius: "4px",
      }}
    >
      <h4>Cadastro de evento</h4>
      <Form>
        <Form.Group>
          <Form.Label>Nome do evento</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do evento " />
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" placeholder="Digite a categoria" />
        </Form.Group>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1"> R$</InputGroup.Text>
          <Form.Control
            placeholder="Valor"
            aria-label="Valor"
            aria-describedby="basic-addon"
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}

export default FormularioEventos;
