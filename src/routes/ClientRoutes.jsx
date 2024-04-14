import { Routes, Route } from "react-router-dom";
import DashCliente from "../pages/dashboard/DashCliente";
import Error from "../pages/Error";

function ClientRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<DashCliente />}></Route>
                <Route path="/mis-reservas" element={<>x</>}></Route>
                <Route
                    exac
                    path="/reservar"
                    element={<>x</>}
                ></Route>
                <Route path="/*" element={<Error />}></Route>
            </Routes>
        </>
    );
}

export default ClientRoutes;
