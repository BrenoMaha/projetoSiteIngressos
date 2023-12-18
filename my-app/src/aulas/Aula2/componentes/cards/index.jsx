import React, { useState } from "react";
import imagem1 from "./fotos/cópia-de-Encontro-de-Forro_foto-Julia-Pera-15.jpg";
import imagem2 from "./fotos/img_0483.jpg";
import imagem3 from "./fotos/hqdefault.jpg";
import SelectDataEventos from "../organizaData";
import "./style.css";
import { Card, Button } from "react-bootstrap";

function Eventos() {
  const [eventosOrganizados, setEventosOrganizados] = useState([
    {
      id: 1,
      evento: "Campeonato de forro",
      data: "24/03/2023",
      img: imagem1,
      genero: "Dança",
      valor: "R$ 30,00",
    },
    {
      id: 2,
      evento: "Campeonato de boxe de anões",
      data: "14/04/2023",
      img: imagem2,
      genero: "Luta",
      valor: "R$ 50,00",
    },
    {
      id: 3,
      evento: "Curso de banho em peixes",
      data: "31/12/2023",
      img: imagem3,
      genero: "Conhecimento",
      valor: "R$ 89,99",
    },
  ]);

  function converterData(data) {
    const [dia, mes, ano] = data.split("/");
    return new Date(`${mes}/${dia}/${ano}`);
  }

  const ordenarEventos = (opcao) => {
    let eventosOrdenados = [...eventosOrganizados];

    switch (opcao) {
      case "decrescente":
        eventosOrdenados.sort(
          (a, b) => converterData(b.data) - converterData(a.data)
        );
        break;
      case "crescente":
        eventosOrdenados.sort(
          (a, b) => converterData(a.data) - converterData(b.data)
        );
        break;
      default:
        eventosOrdenados = [...eventosOrganizados];
    }

    setEventosOrganizados(eventosOrdenados);
  };

  return (
    <div className="lista">
      <ul>
        {eventosOrganizados.map((evento) => (
          <li key={evento.id}>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={evento.img} />
              <Card.Body>
                <Card.Title>
                  <h3>{evento.evento}</h3>
                </Card.Title>
                <Card.Text>
                  <h5>
                    Genero: {evento.genero} <br />
                    Data: {evento.data} <br />
                    Valor: {evento.valor}
                  </h5>
                </Card.Text>
                <Button variant="primary">Adicionar ao carrinho</Button>{" "}
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      <SelectDataEventos onOrdenarEventos={ordenarEventos} />
    </div>
  );
}

export default Eventos;
