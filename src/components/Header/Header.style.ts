import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: calc(100% - 80px);
    height: 60px;
    background-color: ${(props) => props.theme.colors.primary};
    position: absolute;
    right: 0;
    `;