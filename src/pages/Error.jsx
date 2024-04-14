import { Link } from "react-router-dom";
import error from "../assets/error.svg";

function Error() {
    return (
        <div className="grow">
            <div className="p-3 p-md-5 d-flex flex-column justify-content-center align-items-center gap-4 flex-md-row">
                <div>
                    <h1 className="display-1 fw-bold mt-3 text-naranja fs-32">
                        404
                    </h1>
                    <p className="fs-20 fw-medium">
                        Ooops... La pagina que buscas parece que no existe
                    </p>
                    <Link
                        className="btn btn-naranja px-5 py-2 mt-3 rounded-0 fs-20 fw-bold"
                        to="/"
                    >
                        Volver a home
                    </Link>
                </div>
                <div>
                    <img
                        src={error}
                        alt="imagen de error"
                        className="img-fluid"
                    />
                </div>
            </div>
            <div className="bg-beige px-2 py-5 p-md-5 d-flex flex-column justify-content-center text-center gap-4 flex-md-row justify-content-md-evenly">
                <h2 className="fw-bold m-0 fs-3">Tuviste algun problema?</h2>
                <Link
                    to="/contacto"
                    className="btn w-250 mx-auto mx-md-0 btn-dark rounded-0 fw-bold fs-20"
                >
                    Contactanos
                </Link>
            </div>
        </div>
    );
}

export default Error;
