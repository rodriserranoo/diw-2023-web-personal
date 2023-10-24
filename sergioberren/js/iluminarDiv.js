document.addEventListener("DOMContentLoaded", function () {
    const enlace = document.getElementById("iluminarEnlace");
    const divIluminado = document.getElementById("divIluminado");

    enlace.addEventListener("click", function (e) {
        e.preventDefault(); // Evita que el enlace redirija a una página nueva

        // Agrega una clase al div para cambiar el color de fondo
        divIluminado.classList.add("iluminado");

        // Elimina la clase después de un corto período de tiempo (500 ms)
        setTimeout(function () {
            divIluminado.classList.remove("iluminado");
        }, 500);
    });
});
