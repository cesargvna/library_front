import React from "react";
import { } from "formik";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    Container,
    LoginBox,
    Title,
    Logo,
    Input,
    ErrorMessage,
    InputGroup,
    Registration
} from "./Login.styles";
import Button from "../../components/Button";
import { enqueueSnackbar } from "notistack";
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
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Registration >
                            <InputGroup>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Nombre de usuario"
                                    autoComplete="off"
                                />
                                {errors.username && touched.username ? (
                                    <ErrorMessage>{errors.username}</ErrorMessage>
                                ) : null}
                            </InputGroup>

                            <InputGroup>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                />
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
