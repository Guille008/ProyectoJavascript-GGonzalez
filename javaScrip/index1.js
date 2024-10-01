let total = 0;
const envio = 2000;
let nombre = "";
let apellido = "";
let direccion = "";

function Combos(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
}

const comboPequeño = new Combos("Combo Pequeño", 5000);
const comboMediano = new Combos("Combo Mediano", 6500);
const comboGrande = new Combos("Combo Grande", 8000);

const menus = [comboPequeño, comboMediano, comboGrande];



document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");


    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        nombre = formulario.elements[0].value;
        apellido = formulario.elements[1].value;
        direccion = formulario.elements[3].value;

        let delivery = formulario.elements["Delivery"].value;

        delivery === "Si" ? total += envio : direccion = "No aplica";

        const resumenPedido = `
            Nombre: ${nombre} ${apellido}
            Delivery: ${delivery}
            Dirección: ${direccion}
            Total a pagar: $${total}
        `;

        // Muestra el resumen del pedido en la página
        const main = document.getElementById("main");
        const resumenDiv = document.createElement("div");
        resumenDiv.textContent = resumenPedido;
        main.appendChild(resumenDiv);

        localStorage.setItem("pedido", resumenPedido);
    });

    document.getElementById("botonPequeño").addEventListener("click", function() {
        total += comboPequeño.precio;
        console.log("Total actualizado: $" + total);
    });

    document.getElementById("botonMediano").addEventListener("click", function() {
        total += comboMediano.precio;
        console.log("Total actualizado: $" + total);
    });

    document.getElementById("botonGrande").addEventListener("click", function() {
        total += comboGrande.precio;
        console.log("Total actualizado: $" + total);
    });

    
    document.getElementById("Cancelar").addEventListener("click", function() {
        localStorage.removeItem("pedido");
        Delivery = "No";
        total = 0;
        console.warn("Total reiniciado a: $" + total);
    });
});


// Agregado de hora

function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");

    const horaActual = `${hora}:${minutos}:${segundos}`;
    document.getElementById("horaActual").textContent = horaActual;
}

setInterval(actualizarHora, 1000);
actualizarHora();