///Desafío 8

console.log(document);
console.log(document.body);

const hijo = document.createElement("h2")
hijo.setAttribute("id", "elementoAgregado")
hijo.textContent = "Elemento Nuevo"
document.getElementById("aca").appendChild(hijo)
console.log(hijo)

class Producto {
    constructor({ nombre, categoria, precio, stock }) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}
const guardarDatos = () => {

    const producto = new Producto({
        nombre: document.getElementById("nombre").value,
        categoria: document.getElementById("categoria").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value
    })

    const padre = document.createElement("div")

    const hijo = document.createElement("h2")
    hijo.textContent = producto.nombre
    padre.appendChild(hijo)

    const hijo1 = document.createElement("p")
    hijo1.textContent = producto.categoria
    padre.appendChild(hijo1)

    const hijo2 = document.createElement("p")
    hijo2.textContent = producto.producto
    padre.appendChild(hijo2)

    const hijo3 = document.createElement("p")
    hijo3.textContent = producto.precio
    padre.appendChild(hijo3)

    const hijo4 = document.createElement("p")
    hijo4.textContent = producto.stock
    padre.appendChild(hijo4)

    document.getElementById("aca").appendChild(padre)

    return producto
}

btn.addEventListener("click", () => {
    guardarDatos()
})