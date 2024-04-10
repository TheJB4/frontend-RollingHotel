import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Administrador from "./pages/admin/Administrador";

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
