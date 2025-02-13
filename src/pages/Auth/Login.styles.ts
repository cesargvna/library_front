import styled from "styled-components";
import { Form, Field, } from 'formik';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f8f8;
`;

export const LoginBox = styled.div`
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 320px;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.div`
    background: ${(props) => props.theme.colors.primary};
    color: white;
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
`;

export const Registration = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Input = styled(Field)`
    padding: 10px;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid #ddd;
    border-radius: 5px;
    font-size: 14px;

    &:focus {
        outline: none;
        border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    }
`;

export const Button = styled.button`
    background: linear-gradient(to right, #36d1dc, #5b86e5);
    color: white;
    font-size: 16px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
`;

export const ErrorMessage = styled.p`
    color: ${(props) => props.theme.colors.error};
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;

`;
