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