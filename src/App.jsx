import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacto from "./components/pages/Contacto";
import Home from './pages/Home';
import Header from './Components/Header';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Outlet />}></Route>
                    <Route index element={<h1>Home</h1>}></Route>
                    <Route
                        path="/habitaciones"
                        element={<h1>Habitaciones</h1>}
                    ></Route>
                    <Route
                        path="/servicios"
                        element={<h1>Servicios</h1>}
                    ></Route>
                    <Route
                        path="/novedades"
                        element={<h1>Novedades</h1>}
                    ></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                    <Route path="/reserva" element={<h1>Reserva</h1>}></Route>
                    <Route
                        path="*"
                        element={<h1>Pagina no encontrada 404</h1>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
