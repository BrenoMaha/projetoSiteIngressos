import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SelectDataEventos = ({ onOrdenarEventos }) => {
  const [evento, setEvento] = useState({
    dataOrganizada: "" 
  });

  const handleSelectChange = (e) => {
    setEvento({ ...evento, dataOrganizada: e.target.value });
    onOrdenarEventos(e.target.value); 
  };

  return (
    <Form style={{padding:"2vh", borderRadius: "3px" }}>
      <Form.Group className="mb-3"  controlId="formSelectData">
        <Form.Label style={{color: "black"}}>Organizar Eventos</Form.Label>
        <Form.Select
          value={evento.dataOrganizada}
          onChange={handleSelectChange}
          
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="decrescente">Mais Cedo</option>
          <option value="crescente">Mais tarde</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default SelectDataEventos;
