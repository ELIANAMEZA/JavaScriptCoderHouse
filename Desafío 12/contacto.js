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