$("#btn").on("click", () => {
    $("#cuadrado1").fadeIn(5000)
        .fadeOut(5000)
})


$("#btn2").on("click", () => {
    $("#cuadrado3").slideToggle(2000);
})


$("div").prepend(`<form id="contacto">
    <input type="text" placeholder="Nombre" required>
    <input type="number" placeholder="Teléfono" required>
    <input type="email" placeholder="Email" required>
    <input type="submit">
    </form>`);

$("#contacto").submit(function(e) {

    e.preventDefault();
    let hijos = $(e.target).children();
    console.log(hijos[0].value);
    console.log(hijos[1].value);
    console.log(hijos[2].value);

});

$(document).ready(function() {
    $("#contacto").validate();
});

$(".animacion").slideUp(1000)
    .slideDown(1000)
    .delay(5000)
    .slideUp(2000)
    .slideDown(2000)
    .delay(1000)
    .slideUp(3000)
    .slideDown(3000),



    function() { //3er parámetro callback
        console.log("final de animación");
    };