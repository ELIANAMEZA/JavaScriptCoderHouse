/*//Desafío 4 y complementario
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
*/

//Desafío 5

class Producto {
    constructor(nombreProducto, categoriaProducto, precioProducto, stockProducto, disponibleProducto) {
        this.nombre = nombreProducto
        this.categoria = categoriaProducto
        this.precio = precioProducto
        this.stock = stockProducto
        this.disponible = disponibleProducto
    }
    comprar(cantidad) {
        if (this.stock <= 0) {
            console.log("no podes comprar");
            this.disponible = false
        } else {
            this.stock = this.stock - cantidad
            console.log(`Compraste un ${this.nombre}, te salio ${this.precio * cantidad}`);
        }
    }
}
const producto1 = new Producto("Cartera", "Petra", 5000, 5, true)

console.log(producto1);

const producto2 = new Producto("Cartera", "Helena", 3000, 5, true)

console.log(producto2);

const producto3 = new Producto("Cartera", "Atenea", 4000, 5, true)

console.log(producto3);