import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./ItemCount.css";

function ItemCount({ stock = "5", initial = "0", onAdd }) {
  onAdd = () => {
    console.log("Agregado al carrito");
  };

  const [contador, setContador] = useState(parseInt(initial));
  const sumarUno = () => {
    setContador(contador + 1);
  };
  function restarUno() {
    setContador(contador - 1);
  }

  return (
    <>
      <Container className="containerCount">
        <Card>
          <Card.Img variant="top" src={logo} alt="React Bootstrap logo" />
          <Card.Body>
            <Card.Title>Nombre del Producto</Card.Title>
            <Button
              className="btnCard"
              disabled={contador >= stock}
              onClick={sumarUno}
              variant="primary"
            >
              +
            </Button>
            <span>{contador}</span>
            <Button
              className="btnCard"
              disabled={contador <= 0}
              onClick={restarUno}
            >
              -
            </Button>
            <Button className="btnAdd" onClick={onAdd}>
              Agregar al carrito
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ItemCount;
