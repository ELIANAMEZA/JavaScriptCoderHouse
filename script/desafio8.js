/*class Producto {
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
console.log(listaMarroquineria); */

console.log(document);
console.log(document.body);
document.getElementById("compra").textContent = "Aquí te mostraremos los productos que seleccionaste para comprar"

const hijo = document.createElement("h2")
hijo.setAttribute("id", "elementoAgregado")
hijo.textContent = "Elemento Nuevo"
document.getElementById("aca").appendChild(hijo)
console.log(hijo)

class Producto {
    constructor(nombre, categoria, precio, stock, disponible) {
        this.nombre = nombre,
            this.categoria = categoria,
            this.precio = precio,
            this.stock = stock,
            this.disponible = disponible
    }
}

const guardarDatos = () => {

    const producto = new Producto({
        nombre: document.getElementById("nombre").value,
        categoria: document.getElementById("categoria").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value,
        disponible: document.getElementById("disponible").value,

    })

    const padre = document.createElement(div)

    const hijo = document.createElement(h2)
    hijo.textContent = producto.nombre
    padre.appendchild(hijo)

    const hijo1 = document.createElement(p)
    hijo1.textContent = producto.categoria
    padre.appendchild(hijo1)

    const hijo2 = document.createElement(p)
    hijo2.textContent = producto.precio
    padre.appendchild(hijo2)

    const hijo3 = document.createElement(p)
    hijo2.textContent = producto.stock
    padre.appendchild(hijo3)

    const hijo4 = document.createElement(p)
    hijo2.textContent = producto.disponible
    padre.appendchild(hijo4)

    document.getElementById("aca").appendChild(padre)

    return producto
}