let total = 0;
const envio = 2000;
// const menuPequeño = "1:Combo pequeño";
// const menuMediano = "2:Combo mediano";
// const menuGrande = "3:Combo grande";
// const precioPequeño = 5000;
// const precioMediano = 6500;
// const precioGrande = 8000;

function Combos (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}

const comboPequeño = new Combos("1: Combo Pequeño",5000);
const comboMediano = new Combos("2:Combo Mediano",6500);
const ComboGrande = new Combos("3: Combo Grande",8000);

let seleccion = 0;
let nombre = "Nombre";
let apellido = "Apellido";
let direccion = "0";
let delivery = "no";

// alert("Bienvenido a RG burgers");
// nombre = prompt("Ingurese su nombre");
// apellido = prompt("Ingrese su apellido");
// alert("Nos alegra tenerte por aqui"+" "+nombre);
// alert("Estas son nuestas opciones de menu que tenemos para vos"+"\n"+menuPequeño+"\n"+menuMediano+"\n"+menuGrande);
seleccion = parseInt(prompt("Ingresa el numero de la opcion elegida"));

if (seleccion == 1){
    total =comboPequeño.precio;
} else if (seleccion == 2){
    total = comboMediano.precio;
} else if (seleccion == 3){
    total = ComboGrande.precio;
} else {
    console.log("El dato ingresado es incorrecto");
}
delivery = prompt("Desea que lo enviemos a su domicilio? \n"+"Si\n"+"No \n");

if (delivery == "Si"|| delivery == "si"){
    direccion = prompt("Ingrese su direccion de entrega")
    total = total+envio;
} else if (delivery == "no" || delivery =="No"){
    direccion = 0;
} else {
    console.log("El valor ingresado es incorrecto");
}

console.log(nombre,"Recibimos correctamente su pediodo\nDatos del cliente:\n");
console.log("Nombre: ",nombre," ",apellido);
if (seleccion == 1){
    console.log("Menu",comboPequeño);
} else if (seleccion == 2){
    console.log("Menu", comboMediano);
} else if (seleccion == 3){
    console.log("Menu", ComboGrande);
}
if (direccion != 0){
console.log("Direccion de entrega: ",direccion);
console.log("Costo de envio: $"+envio);
}
console.log("Subotal a pagar: ",total);
let agregarPedido = prompt("Desea Agregar otro depido?")
while(agregarPedido == "si" || agregarPedido=="si"){
    console.log("si queso un pedido");
    let clienteDos = prompt("Ingrese nombre para el otro pedio.");
    alert("Estas son nuestas opciones de menu que tenemos para vos"+"\n"+comboPequeñoo+"\n"+comboMediano+"\n"+ComboGrande);
    let seleccionDos = parseInt(prompt("Ingresa el numero de la opcion elegida"));
    if (seleccionDos == 1){
        total = total + comboPequeño.precio;
    } else if (seleccionDos == 2){
        total = total + comboMediano.precio;
    } else if (seleccionDos == 3){
        total = total + ComboGrande.precio;
    } else {
        console.log("El dato ingresado es incorrecto");
    }
    console.log(clienteDos,"Agragamos tu pedido correctamente");
    console.log("Detalle de pedido:")
    if (seleccionDos == 1){
        console.log("Menu", comboPequeño);
    } else if (seleccionDos == 2){
        console.log("Menu", comboMediano);
    } else if (seleccionDos == 3){
        console.log("Menu", ComboGrande);
    } else {
        console.log("Valor Incorrecto");
    }
    agregarPedido = prompt("Desea Agregar otro depido?")
}
console.log("Total a pagar:$"+total);