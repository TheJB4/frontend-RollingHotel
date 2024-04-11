import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Administrador from "./pages/admin/Administrador";
import Habitacion from "./pages/admin/habitacion/Habitacion";
import Usuario from "./pages/admin/usuario/Usuario";
import Crear from "./pages/admin/habitacion/Crear";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Outlet />}></Route>
                    <Route index element={<Home />}></Route>
                    <Route
                        path="/habitaciones"
                        element={<h1>Habitaciones</h1>}
                    ></Route>
                    <Route path="/admin" element={<Administrador />}></Route>
                    <Route
                        path="/admin/habitacion"
                        element={<Habitacion />}
                    ></Route>
                    <Route
                        exac
                        path="/admin/habitacion/alta"
                        element={<Crear editar={false} title="Cargar" />}
                    ></Route>
                    <Route
                        exac
                        path="/admin/habitacion/actualizar/:id"
                        element={<Crear editar={true} title="Actualizar" />}
                    ></Route>
                    <Route
                        path="/novedades"
                        element={<h1>Novedades</h1>}
                    ></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                    <Route path="/reserva" element={<h1>Reserva</h1>}></Route>
                    <Route path="/*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
