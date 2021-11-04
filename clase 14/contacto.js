$("div").prepend(`<section class="container-fluid">
<div class="row">
    <div class="col-2"></div>
    <div class="col-8">
        <h1 class="text-center text-light mt-3">Contacto</h1>
        <h3 class="text-center text-light mt-3">Nos gustaría conocerte un poco más, nos querés dejar un mensaje?</h3>
        <form action=":/back.php" method="post" class="text-center" id="contacto">
            <input type="text" placeholder="Nombre" class="form-control input mb-3" id="nombre">
            <input type="email" placeholder="Mail" class="form-control input mb-3" id="email">
            <input type="number" placeholder="Teléfono" class="form-control input mb-3" id="telefono">
            <textarea placeholder="escriba su mensaje" rows="10" cols="50" class="form-control input mb-3" id="mensaje"></textarea>
            <div class="col-auto">
                <input type="submit" placeholder="Enviar" class="btn bg-dark text-light mb-5 p-3" id="btn">
            </div>
            <div class="col-auto" id="info">
            </div>
        </form>
    </div>
</div>
</section>`);

/*$("#contacto").submit(function(e) {

    e.preventDefault();
    let hijos = $(e.target).children();
    console.log(hijos[0].value);
    console.log(hijos[1].value);
    console.log(hijos[2].value);
    console.log(hijos[3].value);

});

$(document).ready(function() {
    $("#contacto").validate();
});*/

$(document).ready(function() {

    $("input[type=submit]").click(function(event) {
        event.preventDefault();
        let nombre = $("#nombre").val();
        let email = $("#email").val();
        let telefono = $("#telefono").val();
        let mensaje = $("#nombre").val();

        $.post("back.php", {
            nombre: nombre,
            email: email,
            telefono: telefono,
            mensaje: mensaje,
        }, function(respuesta) {
            $("#info").text(respuesta);
        })

    })
})


/*<form id="contacto" class="container-fluid" rows="" cols="8">
                       <input type="text" placeholder="Nombre" required>
                       <input type="number" placeholder="Teléfono" required>
                       <input type="email" placeholder="Email" required>
                       <textarea name="textarea" rows="10" cols="50" required>Write something here</textarea>
                       
                       <input type="submit">
                   </form>*/