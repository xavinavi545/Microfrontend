import styled from 'styled-components';

export const CardProducto = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const NombreProducto = styled.h3`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const PrecioProducto = styled.p`
  color: #667eea;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

export const DescripcionProducto = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
`;