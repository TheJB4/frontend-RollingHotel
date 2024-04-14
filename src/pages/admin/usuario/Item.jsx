import { getUsuarios, deleteUsuario } from "../../../helpers/queries";
import Options from "../Options";
import Swal from "sweetalert2";

function Item({ usuario, setUsuarios }) {
    const { activo, apellido, nombre, email, telefono, esAdmin, _id } = usuario;
    const borrarUsuario = () => {
        Swal.fire({
            title: "Estas seguro de eliminar este usuario?",
            text: "Una vez hecho esto no se puede recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#b3c4c1",
            confirmButtonText: "Eliminar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteUsuario(_id);
                if (res.status === 200) {
                    Swal.fire({
                        title: "Usuario eliminado!",
                        text: `El usuario "${nombre} ${apellido}" fue eliminado correctamente`,
                        icon: "success",
                    });
                    const res = await getUsuarios();
                    if (res.status === 200) {
                        const data = await res.json();
                        setUsuarios(data);
                    }
                } else {
                    Swal.fire({
                        title: "ERROR!",
                        text: `El usuario "${nombre} ${apellido}"  no se pudo eliminar`,
                        icon: "error",
                    });
                }
            }
        });
    };
    return (
        <>
            <tr className={`${activo ? "" : "table-danger"}`}>
                <td className="text-truncate">{nombre}</td>
                <td className="text-truncate">{apellido}</td>
                <td className="text-truncate">{email}</td>
                <td>{telefono}</td>
                <td className="text-truncate">
                    {activo ? "activo" : "inactivo"}
                </td>
                <td className="text-truncate">
                    {esAdmin ? "admin" : "usuario"}
                </td>
                <td className="d-flex align-items-center justify-content-center gap-1">
                    <Options type="usuario" borrar={borrarUsuario} id={_id} />
                </td>
            </tr>
        </>
    );
}

export default Item;
