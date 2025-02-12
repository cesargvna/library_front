import React from 'react';
import { StyledAvatar } from './Avatar.styles';

interface AvatarProps {
  src: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar' }) => {
  return <StyledAvatar src={src} alt={alt} />;
};

export default Avatar;
