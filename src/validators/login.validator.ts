export const validateLogin = (username: string, password: string) => {
    let errors: { username?: string; password?: string } = {};

    if (!username.trim()) {
        errors.username = "El nombre de usuario es obligatorio.";
    }

    if (!password.trim()) {
        errors.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    return errors;
};