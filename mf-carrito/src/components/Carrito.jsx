import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background: white;
  border-radius: 12px;
`;

const Item = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

function Carrito() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      setItems((prev) => [...prev, e.detail]);
    };

    window.addEventListener('producto-agregado', handler);
    return () => window.removeEventListener('producto-agregado', handler);
  }, []);

  return (
    <Container>
      <h2>🛒 Carrito</h2>
      {items.length === 0 && <p>No hay productos</p>}
      {items.map((item, index) => (
        <Item key={index}>
          <strong>{item.nombre}</strong> – {item.precio}
        </Item>
      ))}
    </Container>
  );
}

export default Carrito;
