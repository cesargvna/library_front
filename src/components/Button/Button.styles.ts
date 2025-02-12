import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border:none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
  `;