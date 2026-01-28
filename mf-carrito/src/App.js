import React from 'react';
import styled from 'styled-components';
import Carrito from './components/Carrito';

const Page = styled.div`
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

function App() {
  return (
    <Page>
      <Title> mf-carrito (standalone)</Title>
      <Carrito />
    </Page>
  );
}

export default App;
