import React from 'react';
import { StyledAvatar, InitialsContainer } from './Avatar.styles';

interface AvatarProps {
  src?: string;
  name: string;
}

const getInitials = (name: string) => {
  const words = name.trim().split(" ");
  return words.length > 1
    ? words[0][0].toUpperCase() + words[1][0].toUpperCase()
    : words[0][0].toUpperCase();
};

const Avatar: React.FC<AvatarProps> = ({ src, name }) => {
  return src ? (
    <StyledAvatar src={src} alt={name} />
  ) : (
    <InitialsContainer>{getInitials(name)}</InitialsContainer>
  );
};

export default Avatar;
