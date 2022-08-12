//aviso de ir a secciones dentro de la pagina
let redirigiendo = document.getElementById("alerta");

    redirigiendo.addEventListener("click", () => {
    Toastify({
        text: "Ya vamos para alla!",
        duration: 3000,
        style: {
        background: "red",
        },
    }).showToast();
    }); 
