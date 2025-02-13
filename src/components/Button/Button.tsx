import React from 'react';
import {StyledButton} from './Button.styles';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps > = ({ label, onClick,type }) => {
    return <StyledButton type={type}  onClick={onClick}>{label}</StyledButton>;
};


export default Button;