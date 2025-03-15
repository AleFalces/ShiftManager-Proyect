import Swal from "sweetalert2";

const alertUser = () => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "No, cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("¡Cancelado!", "El turno ha sido eliminado.", "success");
      console.log("Eliminado");
    } else {
      Swal.fire("Error", "No se pudo cancelar el turno.", "error");
    }
  });
};
export default alertUser;
