import styled from 'styled-components';

export const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const InitialsContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;
