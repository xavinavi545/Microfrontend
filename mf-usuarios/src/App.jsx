import React, { useState } from 'react';
import styled from 'styled-components';
import { PerfilUsuario, Avatar, NombreUsuario } from './components/PerfilUsuario';
import { BotonEditar } from './components/BotonEditar';

const Container = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  margin: 20px 0;
`;

const Titulo = styled.h2`
  color: white;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const GridUsuarios = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const EmailUsuario = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 5px;
`;

const RolUsuario = styled.span`
  background: #f093fb;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  margin: 10px 0;
`;

const EstadisticasContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 15px 0;
  width: 100%;
  justify-content: space-around;
`;

const Estadistica = styled.div`
  text-align: center;
`;

const NumeroEstadistica = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #f5576c;
`;

const LabelEstadistica = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 5px;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  min-width: 300px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #f093fb;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
`;

const BotonesModal = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const BotonGuardar = styled.button`
  flex: 1;
  background: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #218838;
  }
`;

const BotonCancelar = styled.button`
  flex: 1;
  background: #6c757d;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #5a6268;
  }
`;

function App() {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: 'Xavier Navia',
      email: 'xavi.navia@empresa.com',
      rol: 'Administrador',
      compras: 24,
      puntos: 1250
    },
    {
      id: 2,
      nombre: 'Carlos Ruiz',
      email: 'carlos.ruiz@empresa.com',
      rol: 'Usuario',
      compras: 12,
      puntos: 680
    },
    {
      id: 3,
      nombre: 'Sofía Martínez',
      email: 'sofia.martinez@empresa.com',
      rol: 'Usuario',
      compras: 18,
      puntos: 920
    }
  ]);

  const [editando, setEditando] = useState(null);
  const [nombreTemp, setNombreTemp] = useState('');

  const handleEditar = (usuario) => {
    setEditando(usuario.id);
    setNombreTemp(usuario.nombre);
  };

  const handleGuardar = () => {
    setUsuarios(usuarios.map(u => 
      u.id === editando ? { ...u, nombre: nombreTemp } : u
    ));
    setEditando(null);
  };

  const getIniciales = (nombre) => {
    return nombre.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Container>
      <Titulo>👥 Gestión de Usuarios</Titulo>
      <GridUsuarios>
        {usuarios.map(usuario => (
          <PerfilUsuario key={usuario.id}>
            <Avatar>{getIniciales(usuario.nombre)}</Avatar>
            <NombreUsuario>{usuario.nombre}</NombreUsuario>
            <EmailUsuario>{usuario.email}</EmailUsuario>
            <RolUsuario>{usuario.rol}</RolUsuario>
            
            <EstadisticasContainer>
              <Estadistica>
                <NumeroEstadistica>{usuario.compras}</NumeroEstadistica>
                <LabelEstadistica>Compras</LabelEstadistica>
              </Estadistica>
              <Estadistica>
                <NumeroEstadistica>{usuario.puntos}</NumeroEstadistica>
                <LabelEstadistica>Puntos</LabelEstadistica>
              </Estadistica>
            </EstadisticasContainer>

            <BotonEditar onClick={() => handleEditar(usuario)}>
              ✏️ Editar Perfil
            </BotonEditar>
          </PerfilUsuario>
        ))}
      </GridUsuarios>

      {editando && (
        <>
          <Overlay onClick={() => setEditando(null)} />
          <Modal>
            <h3>Editar Usuario</h3>
            <Input
              value={nombreTemp}
              onChange={(e) => setNombreTemp(e.target.value)}
              placeholder="Nombre completo"
            />
            <BotonesModal>
              <BotonGuardar onClick={handleGuardar}>Guardar</BotonGuardar>
              <BotonCancelar onClick={() => setEditando(null)}>Cancelar</BotonCancelar>
            </BotonesModal>
          </Modal>
        </>
      )}
    </Container>
  );
}

export default App;