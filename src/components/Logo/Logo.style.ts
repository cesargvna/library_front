import styled from 'styled-components';

// Estilo para la imagen del logo
export const LogoImage = styled.img`
  width: 40px; /* Tamaño del logo */
  height: 40px;
  border-radius: 50%; /* Hace que sea circular */
  object-fit: cover; /* Ajusta la imagen sin deformarla */
  display: block;
  margin: 20px auto; /* Centrar el logo */
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Efecto de zoom al pasar el mouse */
  }
`;

// Estilo para el texto del logo
export const LogoText = styled.div`
  font-size: 24px;  /* Tamaño del texto */
  font-weight: bold;
  text-align: center;
  color: #333; /* Color del texto */
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Efecto de zoom al pasar el mouse */
  }
`;