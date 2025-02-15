import React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaLock } from "react-icons/fa";
import {
    Container,
    LoginBox,
    Title,
    Logo,
    Input,
    ErrorMessage,
    InputGroup,
    Registration,
    InputWrapper
} from "./Login.styles";
import Button from "../../components/Button";

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
                <Logo>M</Logo>
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