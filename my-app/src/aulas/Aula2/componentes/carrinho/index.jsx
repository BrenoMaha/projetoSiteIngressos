import { useState } from "react";
import { Button,Offcanvas } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons"; // importa o ícone Cart

function Carrinho(){
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
          <Button variant="primary" onClick={handleShow}>
            <Cart color="white" size={22} title="Carrinho" /> 
          </Button>
    
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Carrinho</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              aqui vai os itens
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
    }

export default Carrinho;