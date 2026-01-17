import React, { useState } from 'react';
import styled from 'styled-components';
import { CardProducto, NombreProducto, PrecioProducto, DescripcionProducto } from './components/CardProducto';
import { BotonComprar } from './components/BotonComprar';

const Container = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  margin: 20px 0;
`;

const Titulo = styled.h2`
  color: white;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const GridProductos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Notificacion = styled.div`
  background: #28a745;
  color: white;
  padding: 12px;
  border-radius: 6px;
  margin-top: 15px;
  text-align: center;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function App() {
  const [compras, setCompras] = useState([]);

  const productos = [
    {
      id: 1,
      nombre: 'Laptop Pro',
      precio: '$1,299',
      descripcion: 'Potente laptop para profesionales con procesador de última generación'
    },
    {
      id: 2,
      nombre: 'Mouse Inalámbrico',
      precio: '$49',
      descripcion: 'Mouse ergonómico con conectividad Bluetooth y batería de larga duración'
    },
    {
      id: 3,
      nombre: 'Teclado Mecánico',
      precio: '$129',
      descripcion: 'Teclado RGB con switches mecánicos para una experiencia de escritura superior'
    }
  ];

  const handleComprar = (producto) => {
    setCompras([...compras, producto.nombre]);
    setTimeout(() => {
      setCompras(compras.filter(c => c !== producto.nombre));
    }, 3000);
  };

  return (
    <Container>
      <Titulo>🛍️ Catálogo de Productos</Titulo>
      <GridProductos>
        {productos.map(producto => (
          <CardProducto key={producto.id}>
            <NombreProducto>{producto.nombre}</NombreProducto>
            <PrecioProducto>{producto.precio}</PrecioProducto>
            <DescripcionProducto>{producto.descripcion}</DescripcionProducto>
            <BotonComprar onClick={() => handleComprar(producto)}>
              Agregar al Carrito
            </BotonComprar>
            {compras.includes(producto.nombre) && (
              <Notificacion>✓ Agregado al carrito</Notificacion>
            )}
          </CardProducto>
        ))}
      </GridProductos>
    </Container>
  );
}

export default App;