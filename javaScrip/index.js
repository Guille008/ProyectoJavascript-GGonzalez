// Primero deberiamos cargar las variables pero
// pero vamos a ver si es conveniente ponerlo como producto
let total = 0;
const envio = 2000;
const menuPequeño = "1:Combo pequeño";
const menuMediano = "2:Combo mediano";
const menuGrande = "3:Combo grande";
const precioPequeño = 5000;
const precioMediano = 6500;
const precioGrande = 8000;

let seleccion = 0;
let nombre = "Nombre";
let apellido = "Apellido";
let direccion = "0";
let delivery = "no";

alert("Bienvenido a RG burgers");
nombre = prompt("Ingurese su nombre");
apellido = prompt("Ingrese su apellido");
alert("Nos alegra tenerte por aqui"+" "+nombre);
alert("Estas son nuestas opciones de menu que tenemos para vos"+"\n"+menuPequeño+"\n"+menuMediano+"\n"+menuGrande);
seleccion = parseInt(prompt("Ingresa el numero de la opcion elegida"));

if (seleccion == 1){
    total = precioPequeño;
} else if (seleccion == 2){
    total = precioMediano;
} else if (seleccion == 3){
    total = precioGrande;
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
    console.log("Menu", menuPequeño,"$"+precioPequeño);
} else if (seleccion == 2){
    console.log("Menu", menuMediano,"$"+precioMediano);
} else if (seleccion == 3){
    console.log("Menu", menuGrande,"$"+precioGrande);
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
    alert("Estas son nuestas opciones de menu que tenemos para vos"+"\n"+menuPequeño+"\n"+menuMediano+"\n"+menuGrande);
    let seleccionDos = parseInt(prompt("Ingresa el numero de la opcion elegida"));
    if (seleccionDos == 1){
        total = total + precioPequeño;
    } else if (seleccionDos == 2){
        total = total + precioMediano;
    } else if (seleccionDos == 3){
        total = total + precioGrande;
    } else {
        console.log("El dato ingresado es incorrecto");
    }
    console.log(clienteDos,"Agragamos tu pedido correctamente");
    console.log("Detalle de pedido:")
    if (seleccionDos == 1){
        console.log("Menu", menuPequeño,"$"+precioPequeño);
    } else if (seleccionDos == 2){
        console.log("Menu", menuMediano,"$"+precioMediano);
    } else if (seleccionDos == 3){
        console.log("Menu", menuGrande,"$"+precioGrande);
    } else {
        console.log("Valor Incorrecto");
    }
    agregarPedido = prompt("Desea Agregar otro depido?")
}
console.log("Total a pagar:$"+total);