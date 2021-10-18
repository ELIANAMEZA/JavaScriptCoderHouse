/* Desafío clase 1

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let lugar = prompt("donde vive");

mensaje = `tu nombre completo es ${nombre} ${apellido} y vivís en ${lugar}`
alert(mensaje)


Desafío clase 2

let edad = prompt("¿que edad tenés?")

if (edad > 40) {
    alert("podes hacerte un tatoo y tenés un 20%")
} else if (edad >= 18) {
    alert("podes hacerte el tatoo")
} else {
    alert("no podes hacerte el tatoo")
}




// Desafìo clase 3
//Juego de dados
let num1 = Number(prompt("ingresa número"))
let num2 = Number(prompt("ingresa número"))

do {
    num1 - Math.floor(Math.random() * (7 - 1) + 1);
    num2 - Math.floor(Math.random() * (7 - 1) + 1);
    console.log(num1, num2)

} while (num1 != 3 || num2 != 3)
alert("pierde su turno")
*/
// Entrar por ID  - getElementById()
////console.log(document.getElementById("unico"))
//ME TRAE SOLO UN OBJETO HTML
// Entrar por Clase  - getElementsByClassName()
//console.log(document.getElementsByClassName("clase1"))
//ME TRAE UN ARRAY DE OBJETOS HTML
// Entrar por Etiqueta - getElementsByTagName()
//console.log(document.getElementsByTagName("h1"))
//ME TRAE UN ARRAY DE OBJETOS HTML
//console.log(document.getElementsByTagName("p")[3])
//document.getElementsByTagName("p")[3].textContent = "Este es el nuevo texto"
//querySelector
//console.log(document.querySelector("#unico"))
//console.log(document.querySelector(".clase1"))
//console.log(document.querySelector("p"))
//Solamente me trae 1 elemento, el 1° que encuentra
//console.log(document.querySelectorAll("p")[3])
//document.getElementById("unico").textContent = " Este es el nuevo contenido"
//document.getElementById("unico").style.color = "red"
//document.getElementById("unico").style.display = "none"
//document.getElementById("unico").setAttribute("class", "truco")
//1°Creo el elemento que quiero inyectar

/*document.getElementById("btn").addEventListener("click", () => {
        guardarDatos()
    })
listaElementos.forEach(element => {
    const junitoP = document.createElement("div")
    const junito = document.createElement("h2")
    junito.textContent = producto.n
    junitoP.appendChild(junito)
    const junito1 = document.createElement("p")
    junito1.textContent = producto.c
    junitoP.appendChild(junito1)
    const junito2 = document.createElement("p")
    junito2.textContent = producto.p
    junitoP.appendChild(junito2)
    document.getElementById("aca").appendChild(junitoP)
});*/