// src/components/Logo/Logo.tsx
import React from 'react';
import { LogoImage, LogoText } from './Logo.style'; // Importamos los estilos

interface LogoProps {
  imageUrl?: string; // Propiedad opcional para la URL de la imagen
  text?: string;     // Propiedad opcional para el texto del logo
}

const Logo: React.FC<LogoProps> = ({ imageUrl, text }) => {
  // Si no hay imagen, mostramos el texto
  return imageUrl ? (
    <LogoImage src={imageUrl} alt="Logo" />
  ) : (
    <LogoText>{text || 'Mi Logo'}</LogoText> // Muestra el texto 'Mi Logo' si no hay texto definido
  );
};

export default Logo;