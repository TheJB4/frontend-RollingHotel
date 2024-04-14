import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import AdminRoutes from "./routes/AdminRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
    const { pathname } = useLocation();
    const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};
    const [loggedUser, setUserLogged] = useState(usuario);

    return (
        <>
            {pathname !== "/login" && pathname !== "/sign-up" && (
                <Header
                    loggedUser={loggedUser}
                    setUserLogged={setUserLogged}
                    path={pathname}
                />
            )}

            <Routes>
                <Route path="/" element={<Outlet />}></Route>
                <Route index element={<Home />}></Route>

                {/*-------------------ADMINISTRADOR----------------------*/}
                <Route
                    exact
                    path="/admin/*"
                    element={
                        <ProtectedRoutes>
                            <AdminRoutes />
                        </ProtectedRoutes>
                    }
                />

                {/*-------------------------------------------------------*/}
                <Route path="/novedades" element={<h1>Novedades</h1>}></Route>
                <Route path="/reserva" element={<h1>Reserva</h1>}></Route>
                <Route
                    path="/habitaciones"
                    element={<h1>Habitaciones</h1>}
                ></Route>
                <Route path="/contacto" element={<Contacto />}></Route>
                <Route
                    exac
                    path="/login"
                    element={<Login setUserLogged={setUserLogged} />}
                />
                <Route exac path="/sign-up" element={<Signup />} />
                <Route path="/*" element={<Error />}></Route>
            </Routes>
            {pathname !== "/login" && pathname !== "/sign-up" && <Footer />}
        </>
    );
}

export default App;
