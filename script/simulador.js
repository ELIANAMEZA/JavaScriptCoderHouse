//Desafío 4 y complementario


//Simulador de pago



const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const calcular = (a, b) => a * b;
const iva = x => x * 0.21;

let precioProducto = 500;
let precioDescuento = 50;
let producto = prompt("que producto queres?");
let cantidad = prompt("cuantos queres comprar?");

//Calculo el precioProducto + IVA 
let nuevoPrecio = suma(precioProducto, iva(precioProducto))
console.log(nuevoPrecio)
    //Calculo el precioProducto + IVA  por cantidad
let nuevoPrecioCantidad = calcular(suma(precioProducto, iva(precioProducto)), cantidad)
console.log(nuevoPrecioCantidad)
    //Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecioConDescuento = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
console.log(nuevoPrecioConDescuento);