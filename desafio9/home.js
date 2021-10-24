let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")
console.log(imprimirDatos)

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {

    let home = listaObjetos.indexOf(element)

    imprimirDatos.innerHTML += `
    <div class="" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
        <p class="card-text">${element.precio}</p>
        <button class="card-link" onclick="comprar(${home})">Comprar</button>
    </div>
    </div>
    `
});

const comprar = (home) => {

    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }

    carrito.push(listaObjetos[home])
    localStorage.setItem("carrito", JSON.stringify(carrito))
}