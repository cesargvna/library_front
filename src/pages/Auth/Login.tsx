import React, { useState } from "react";
import { 
    Container, 
    LoginBox, 
    Title, 
    Logo, 
    Input, 
    Form, 
} from "./Login.styles";
import  Button  from "../../components/Button";
import { enqueueSnackbar } from "notistack";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Login con: ${username}, ${password}`;
        enqueueSnackbar(message, {
          
            variant: 'success'

          })
        console.log("Login con:", { username, password });
    };

    return (
        <Container>
            <LoginBox>
                <Title>BIENVENIDOS</Title>
                <Logo>M</Logo>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nombre de usuario"
                        autoComplete="off"
                    />
                    
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        
                    />

                    <Button label="Iniciar Sesion" onClick={()=>handleSubmit} />
                </Form>
            </LoginBox>
        </Container>
    );
};

export default Login;
