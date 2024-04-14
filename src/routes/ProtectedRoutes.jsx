import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const admin = JSON.parse(sessionStorage.getItem("usuario")) || null;
    if (!admin) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};

export default ProtectedRoutes;
