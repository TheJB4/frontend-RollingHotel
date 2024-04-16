const api_usuarios = import.meta.env.VITE_API_USUARIOS;
const api_habitaciones = import.meta.env.VITE_API_HABITACIONES;
const api_reservas = import.meta.env.VITE_API_RESERVAS;

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
            headers: {
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
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
            headers: {
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
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
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
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

export const getReservas = async () => {
    try {
        const res = await fetch(api_reservas);
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const getReservasById = async (id) => {
    try {
        const res = await fetch(`${api_reservas}/${id}`);
        return res;
    } catch (error) {
        console.error(error);
    }
};
export const getReservasByUserId = async (id) => {
    try {
        const res = await getReservas();
        const reservas = await res.json();

        const userReservas = reservas.filter((item) => item.userId === id);
        return userReservas;
    } catch (error) {
        console.error(error);
    }
};

export const deleteReserva = async (id) => {
    try {
        const res = await fetch(`${api_reservas}/${id}`, {
            method: "DELETE",
            headers: {
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const postReserva = async (data) => {
    const { userId, habId, informacion } = data;
    try {
        const res = await fetch(api_reservas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
            body: JSON.stringify({ userId, habId, informacion }),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

const checkFree = (entrada, salida, fecha) => {
    if (fecha[0] === "") {
        return true;
    } else {
        return salida < fecha[0] || entrada > fecha[1];
    }
};

const obtenerHabDis = async (habitaciones, entrada, salida) => {
    const disponibles = habitaciones.filter((hab) =>
        checkFree(entrada, salida, hab.fechaOcupada)
    );
    return disponibles;
};

export const check = async (camas, entrada, salida) => {
    try {
        const res = await getHabitaciones();
        const data = await res.json();

        const activas = data.filter((item) => item.disponible === true);
        const filteredCama = activas.filter((hab) => hab.camas >= camas);
        if (entrada > salida) {
            throw new Error("Fecha no valida");
        }

        const habitaciones = obtenerHabDis(filteredCama, entrada, salida);
        return habitaciones;
    } catch (error) {
        console.error(error);
    }
};
