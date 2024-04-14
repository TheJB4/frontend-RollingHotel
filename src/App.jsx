import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nosotros from "./pages/Nosotros";
import Habitaciones from "./pages/Habitaciones";
import Galeria from "./pages/Galeria";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import AdminRoutes from "./routes/AdminRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import ClientRoutes from "./routes/ClientRoutes";

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
                    path="/panel/*"
                    element={
                        <ProtectedRoutes>
                            {usuario.esAdmin ? (
                                <AdminRoutes />
                            ) : (
                                <ClientRoutes />
                            )}
                        </ProtectedRoutes>
                    }
                />
                {/*-------------------------------------------------------*/}
                <Route path="/habitaciones" element={<Habitaciones />}></Route>
                <Route exac path="/nosotros" element={<Nosotros />}></Route>
                <Route exac path="/galeria" element={<Galeria />}></Route>
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
