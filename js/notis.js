export function notiBienvenida() {
  return Swal.fire({
    title: "¡BIENVENIDO!",
    text: "¿Quieres aprender algo nuevo?",
    icon: "info",
    confirmButtonText: "¡Adelante!",
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("Visitante curioso");
    } else if (result.isDismissed) {
      console.log("No quiso aprender");
    }
  });
}
