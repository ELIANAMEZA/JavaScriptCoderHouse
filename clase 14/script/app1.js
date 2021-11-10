// class Producto {

//     constructor(nombre, categoria, precio, stock) {
//         this.nombre = nombre;
//         this.categoria = categoria;
//         this.precio = precio;
//         this.stock = stock;
//     }

// }

// let listaProductos;

// if (localStorage.getItem("lista") == null) {
//     listaProductos = []
// } else {
//     listaProductos = JSON.parse(localStorage.getItem("lista"))
// }

// const crearProducto = (nombre, categoria, precio, stock) => {
//     const producto = new Producto(nombre, categoria, precio, stock)
//     return producto
// }
// const guardarDatos = () => {

//     const producto = new Producto(
//         nombre = document.getElementById("nombre").value,
//         categoria = document.getElementById("categoria").value,
//         precio = Number(document.getElementById("precio").value),
//         stock = parseInt(document.getElementById("stock").value)
//     )

//     listaProductos.push(crearProducto(nombre, categoria, precio, stock))

//     localStorage.setItem("lista", JSON.stringify(listaProductos))

//     return producto

// }
// document.getElementById("btn").addEventListener("click", () => {
//     guardarDatos()
// })

const divRow = document.querySelector("#fotos")


const getData = async() => {

    await fetch("../datos.json")
        .then((response) => response.json())
        .then((data) => data.map((e) => {
            divRow.innerHTML += `<div class="card col-3" style="width: 18rem;">
            <img src=${e.img} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" id="nombre">${e.nombre}</h5>
              <h5 class="card-title" id="precio">${e.precio}$</h5>
              <p class="card-text" id="categoria">${e.categoria}</p>
              <button class="card-link" id="compra" onclick="comprar()">Comprar</button>
              
            </div>
          </div>
            `
        }))

}

getData()

let compra = document.getElementById("compra")
const comprar = (producto) => {
    let carrito = [];
    if (localStorage.getItem("carrito") == null) {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
};
document.addEventListener("DOMContentLoaded", () => {
    comprar()
})