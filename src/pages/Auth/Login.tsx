import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaLock } from "react-icons/fa";
import {
    Container,
    LoginBox,
    Title,
    Input,
    ErrorMessage,
    InputGroup,
    Registration,
    InputWrapper
} from "./Login.styles";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .max(15, "El nombre de usuario debe tener como máximo 15 caracteres")
        .required("El nombre de usuario es obligatorio"),
    password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es obligatoria"),
});

const Login: React.FC = () => {
    return (
        <Container>
            <LoginBox>
                <Title>BIENVENIDOS</Title>
                <Logo imageUrl="https://imgs.search.brave.com/tHfzQlT8kDY8QWTR8HzEwA-J8NE1IxKzTHDWsipTqIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHVyYm9sb2dv/LmNvbS9hc3NldHMv/ZmVhdHVyZXMvcHJv/ZmVzc2lvbmFsLWxv/Z28tdGVtcGxhdGVz/LTNlYjBlMDE2YThj/ZjA5YzFiOGM4MjQz/YTQ4ZmQ5ZmMyZDJk/YTBiODMzZjhjYTg1/YmI3N2JmOTliMjE1/NzFiYzguc3Zn" />
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Registration>
                            <InputGroup>
                                <InputWrapper>
                                    <FaUser style={{ color: "var(--primary-color)" }} />
                                    <Input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Nombre de usuario"
                                        autoComplete="off"
                                    />
                                </InputWrapper>
                                {errors.username && touched.username ? (
                                    <ErrorMessage>{errors.username}</ErrorMessage>
                                ) : null}
                            </InputGroup>

                            <InputGroup>
                                <InputWrapper>
                                    <FaLock style={{ color: "var(--primary-color)" }} />
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Contraseña"
                                    />
                                </InputWrapper>
                                {errors.password && touched.password ? (
                                    <ErrorMessage>{errors.password}</ErrorMessage>
                                ) : null}
                            </InputGroup>
                            <Button type="submit" label="Iniciar Sesión" />
                        </Registration>
                    )}
                </Formik>
            </LoginBox>
        </Container>
    );
};

export default Login;