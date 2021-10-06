//Desafío 6 entreglable y complementario

class Producto {
    constructor(nombre, categoria, precio, stock, disponible) {
        this.nombre = nombre,
            this.categoria = categoria,
            this.precio = precio,
            this.stock = stock,
            this.disponible = disponible
    }
}

let listaMarroquineria = [];

listaMarroquineria.push(new Producto("Petra", "Cartera", 5000, 5, true))
listaMarroquineria.push(new Producto("Helena", "Bolso", 3000, 5, true))
listaMarroquineria.push(new Producto("Atenea", "Mochila", 4000, 5, true))


const agregarProductos = () => {

    let nombre = prompt("Nombre del producto");
    let categoria = prompt("Categoria del producto");
    let precio = Number(prompt("Precio del producto"));
    let stock = Number(prompt("Stock disponible"));
    let disponible = prompt("disponibilidad de producto");

    let producto = new Producto(nombre, categoria, precio, stock, disponible)
    listaMarroquineria.push(producto)
}
listaMarroquineria.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1
    }
    if (a.precio < b.precio) {
        return -1
    }
    return 0
})
console.log(listaMarroquineria);