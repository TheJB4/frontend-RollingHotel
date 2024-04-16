import { Route, Routes } from "react-router";
import Administrador from "../pages/admin/Administrador";
import Habitacion from "../pages/admin/habitacion/Habitacion";
import Reserva from "../pages/admin/reserva/Reserva";
import Usuario from "../pages/admin/usuario/Usuario";
import Crear from "../pages/admin/habitacion/Crear";
import Formulario from "../pages/admin/usuario/Formulario";
import Error from "../pages/Error";

function AdminRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Administrador />}></Route>
                <Route path="/usuario" element={<Usuario />}></Route>
                <Route
                    exac
                    path="/usuario/actualizar/:id"
                    element={<Formulario />}
                ></Route>
                <Route path="/reserva" element={<Reserva />}></Route>
                <Route path="/habitacion" element={<Habitacion />}></Route>
                <Route
                    exac
                    path="/habitacion/alta"
                    element={<Crear editar={false} title="Cargar" />}
                ></Route>
                <Route
                    exac
                    path="/habitacion/actualizar/:id"
                    element={<Crear editar={true} title="Actualizar" />}
                ></Route>
                <Route path="/*" element={<Error />}></Route>
            </Routes>
        </>
    );
}

export default AdminRoutes;
