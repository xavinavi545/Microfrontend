import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';

const MFProductos = lazy(() => import('mfProductos/App'));
const MFUsuarios = lazy(() => import('mfUsuarios/App'));
const MFCarrito = lazy(() => import('mfCarrito/Carrito'));


const ShellContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #1a1a2e, #16213e);
  padding: 20px;
`;

const Header = styled.header`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const TituloPrincipal = styled.h1`
  color: #1a1a2e;
  margin: 0 0 10px 0;
  font-size: 32px;
`;

const Subtitulo = styled.p`
  color: #666;
  margin: 0;
  font-size: 16px;
`;

const Navegacion = styled.nav`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const BotonNav = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  background: ${({ activo }) => (activo ? '#667eea' : '#e0e0e0')};
  color: ${({ activo }) => (activo ? 'white' : '#666')};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const InfoPanel = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  color: white;
`;

const InfoTitulo = styled.h3`
  margin: 0 0 10px 0;
  color: #4ade80;
`;

const InfoTexto = styled.p`
  margin: 5px 0;
  font-size: 14px;
  line-height: 1.6;
`;

const Badge = styled.span`
  background: #4ade80;
  color: #1a1a2e;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
`;

const Loading = styled.div`
  text-align: center;
  padding: 40px;
  color: white;
  font-size: 18px;
`;

function App() {
  const [vistaActiva, setVistaActiva] = useState('productos');

  return (
    <ShellContainer>
      <Header>
        <TituloPrincipal>
          🏢 Plataforma de Microfrontends
          <Badge>Styled Components</Badge>
        </TituloPrincipal>
        <Subtitulo>
          Arquitectura modular con aislamiento de estilos
        </Subtitulo>

        <Navegacion>
          <BotonNav
            activo={vistaActiva === 'productos'}
            onClick={() => setVistaActiva('productos')}
          >
            🛍️ Productos
          </BotonNav>

          <BotonNav
            activo={vistaActiva === 'usuarios'}
            onClick={() => setVistaActiva('usuarios')}
          >
            👥 Usuarios
          </BotonNav>

          <BotonNav
            activo={vistaActiva === 'carrito'}
            onClick={() => setVistaActiva('carrito')}
          >
            🛒 Carrito
          </BotonNav>

          <BotonNav
            activo={vistaActiva === 'ambos'}
            onClick={() => setVistaActiva('ambos')}
          >
            📊 Ver Ambos
          </BotonNav>
        </Navegacion>
      </Header>

      <InfoPanel>
        <InfoTitulo>✨ Características de la Arquitectura</InfoTitulo>
        <InfoTexto>
          <strong>• Aislamiento de estilos:</strong> Cada microfrontend usa Styled Components
        </InfoTexto>
        <InfoTexto>
          <strong>• Comunicación desacoplada:</strong> Eventos personalizados entre MF
        </InfoTexto>
        <InfoTexto>
          <strong>• Shell orquestador:</strong> Controla navegación y renderizado
        </InfoTexto>
      </InfoPanel>

      <Suspense fallback={<Loading>⏳ Cargando microfrontend...</Loading>}>
        {(vistaActiva === 'productos' || vistaActiva === 'ambos') && <MFProductos />}
        {(vistaActiva === 'usuarios' || vistaActiva === 'ambos') && <MFUsuarios />}
        {(vistaActiva === 'carrito' || vistaActiva === 'ambos') && <MFCarrito />}
      </Suspense>
    </ShellContainer>
  );
}

export default App;
