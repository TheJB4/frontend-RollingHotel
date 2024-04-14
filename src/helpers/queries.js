const api_usuarios = import.meta.env.VITE_API_USUARIOS;
const api_habitaciones = import.meta.env.VITE_API_HABITACIONES;

export const getHabitaciones = async () => {
    try {
        const res = await fetch(api_habitaciones);
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const confirmarLibre = async (nro) => {
    const res = await getHabitaciones();
    const habitaciones = await res.json();
    const hab = habitaciones.filter((item) => item?.numero === parseInt(nro));
    if (!hab.length) {
        return true;
    } else {
        return false;
    }
};

export const getHabitacionById = async (id) => {
    try {
        const res = await fetch(`${api_habitaciones}/${id}`);
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const postHabitacion = async (data) => {
    try {
        const res = await fetch(api_habitaciones, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
            body: JSON.stringify(data),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const putHabitacion = async (data, id) => {
    try {
        const res = await fetch(`${api_habitaciones}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
            body: JSON.stringify(data),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const deleteHabitacion = async (id) => {
    try {
        const res = await fetch(`${api_habitaciones}/${id}`, {
            method: "DELETE",
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const getUsuarios = async () => {
    try {
        const res = await fetch(api_usuarios);
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const getUsuarioById = async (id) => {
    try {
        const res = await fetch(`${api_usuarios}/${id}`);
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const deleteUsuario = async (id) => {
    try {
        const res = await fetch(`${api_usuarios}/${id}`, {
            method: "DELETE",
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const putUsuario = async (data, id) => {
    try {
        const res = await fetch(`${api_usuarios}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const registrarUsuario = async (data) => {
    try {
        const res = await fetch(api_usuarios, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
