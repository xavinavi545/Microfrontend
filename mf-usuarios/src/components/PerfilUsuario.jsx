import styled from 'styled-components';

export const PerfilUsuario = styled.div`
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
  margin-bottom: 15px;
`;

export const NombreUsuario = styled.h3`
  color: #333;
  font-size: 20px;
  margin-bottom: 5px;
`;