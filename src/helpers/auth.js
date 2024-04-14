const api_usuarios = import.meta.env.VITE_API_USUARIOS;

export const login = async (usuario) => {
    try {
        const res = fetch(`${api_usuarios}/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
