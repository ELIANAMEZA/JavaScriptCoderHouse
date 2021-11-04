<?php
    if(isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['telefono']) && isset($_POST['mensaje'])){
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $telefono = $_POST['telefono'];
        $mensaje = $_POST['mensaje'];

        echo "cliente " . $nombre . " ". $email . " ". $telefono . " ". $mensaje;
        
    }
¿>