import styled from 'styled-components';

export const BotonEditar = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ee5a52;
  }

  &:active {
    transform: scale(0.98);
  }
`;