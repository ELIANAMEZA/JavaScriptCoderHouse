class User {

    constructor(usuario, pass) {
        this.usuario = usuario;
        this.pass = pass
    }
}

class Producto {

    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }

}

const eliana = new User("meza", "peña")

let listaProductos;

if (localStorage.getItem("lista") == null) {
    listaProductos = []
} else {
    listaProductos = JSON.parse(localStorage.getItem("lista"))
}

const crearProducto = (nombre, categoria, precio, stock) => {
    const producto = new Producto(nombre, categoria, precio, stock)
    return producto
}

const confirmacionDeAcceso = () => {

    let bucle = true

    while (bucle) {

        const usuario = prompt("Ingresa tu usuario");
        const pass = prompt("Ingresa tu pass")

        if (usuario === eliana.usuario && pass === eliana.pass) {
            bucle = false

            break;
        } else {
            alert("USUARIO INCORRECTO");
        }

    }

}

confirmacionDeAcceso()

const guardarDatos = () => {

    const producto = new Producto({
        nombre: document.getElementById("nombre").value,
        categoria: document.getElementById("categoria").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value,
    })

    listaProductos.push(crearProducto(nombre, categoria, precio, stock))

    localStorage.setItem("lista", JSON.stringify(listaProductos))

    return producto
}

guardarDatos()

btn.addEventListener("click", () => {
    guardarDatos()
})