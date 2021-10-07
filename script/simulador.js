//1er entrega del proyecto final

class Producto {
    constructor(nombre, categoria, precio, stock, disponible) {
        this.nombre = nombre,
            this.categoria = categoria,
            this.precio = precio,
            this.stock = stock,
            this.disponible = disponible
    }
    elegir() {
        let modelo = prompt("Qué producto querés?")
        if (modelo = "cartera") {
            alert(`El modelo disponibles para ${modelo} es: Petra`)
        }
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
    suma = (a, b) => a + b;
    resta = (a, b) => a - b;
    iva = precio => precio * 0.21;
    calcular = (a, b) => a * b;


}
const producto1 = new Producto("Petra", "Cartera", 5000, 5, true)
producto1.elegir()
console.log(producto1);

const producto2 = new Producto("Helena", "Bolso", 3000, 5, true)
console.log(producto2);

const producto3 = new Producto("Atenea", "Mochila", 4000, 5, true)
console.log(producto3);

console.log(producto1.suma(producto1.iva(producto1.precio), producto1.precio));
console.log(producto2.suma(producto2.iva(producto2.precio), producto2.precio));
console.log(producto3.suma(producto3.iva(producto3.precio), producto3.precio));


let cantidad = prompt("cuántos vas a comprar?")
let nuevoPrecioProducto1 = console.log(producto1.calcular(producto1.suma(producto1.iva(producto1.precio), producto1.precio), cantidad))
let nuevoPrecioProducto2 = console.log(producto2.calcular(producto2.suma(producto2.iva(producto2.precio), producto2.precio), cantidad))
let nuevoPrecioProducto3 = console.log(producto3.calcular(producto3.suma(producto3.iva(producto3.precio), producto3.precio), cantidad))