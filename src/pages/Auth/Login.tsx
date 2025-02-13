import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Container,
    LoginBox,
    Title,
    Logo,
    Input,
    Form,
    ErrorMessage,
    InputGroup
} from "./Login.styles";
import Button from "../../components/Button";
import { enqueueSnackbar } from "notistack";

const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .max(15, "El nombre de usuario debe tener como máximo 15 caracteres")
        .required("El nombre de usuario es obligatorio"),
    password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es obligatoria"),
});

const Login: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            const message = `Login con: ${values.username}, ${values.password}`;
            enqueueSnackbar(message, { variant: "success" });
            console.log("Login con:", values);
        },
    });

    return (
        <Container>
            <LoginBox>
                <Title>BIENVENIDOS</Title>
                <Logo>M</Logo>
                <Form onSubmit={formik.handleSubmit}>
                    <InputGroup>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Nombre de usuario"
                            autoComplete="off"
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <ErrorMessage>{formik.errors.username}</ErrorMessage>
                        ) : null}
                    </InputGroup>

                    <InputGroup>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Contraseña"
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <ErrorMessage>{formik.errors.password}</ErrorMessage>
                        ) : null}
                    </InputGroup>

                    <Button type="submit" label="Iniciar Sesión" />
                </Form>
            </LoginBox>
        </Container>
    );
};

export default Login;
