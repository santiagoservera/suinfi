<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar datos del formulario y realizar la limpieza
    $nombre = limpiar($_POST["name"]);
    $apellido = limpiar($_POST["surname"]);
    $email = limpiar($_POST["email"]);
    $asunto = limpiar($_POST["subject"]);
    $mensaje = limpiar($_POST["message"]);

    // Validar la dirección de correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Manejar el error de correo electrónico no válido
        echo "<script>alert('Correo electrónico no válido'); window.location.href='error.html';</script>";
        exit();
    }

    // Puedes realizar otras operaciones, como enviar un correo electrónico, almacenar en una base de datos, etc.
    // Por ejemplo, para enviar un correo electrónico
    $destinatario = "info@suinfi.com";
    $asunto = "Nuevo mensaje de $nombre $apellido";
    $contenido = "Mensaje de: $nombre $apellido\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Asunto: $asunto\n";
    $contenido .= "Mensaje: $mensaje";

    if (mail($destinatario, $asunto, $contenido)) {
        // Mostrar un popup de éxito
        echo "<script>alert('Mensaje enviado con éxito'); window.location.href='index.html';</script>";
        exit();
    } else {
        // Mostrar un popup de error
        echo "<script>alert('Error al enviar el formulario'); window.location.href='index.html';</script>";
        exit();
    }
}

// Función para limpiar los datos
function limpiar($dato) {
    $dato = trim($dato);
    $dato = stripslashes($dato);
    $dato = htmlspecialchars($dato);
    return $dato;
}
?>
