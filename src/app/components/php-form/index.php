<?php
// Allow requests from any origin (CORS)
header("Access-Control-Allow-Origin: *");

// Mail server configuration
$destinatario = "danielcastillaa123@gmail.com";
$asunto = "Nuevo formulario enviado";

// Collect form data (you can validate and sanitize as needed)
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Create the message
$contenido = "Nombre: $nombre\nSurname: $surname\nCorreo: $correo\nSubject: $subject\nMensaje: $mensaje";

// Send Email
if (mail($destinatario, $asunto, $contenido)) {
    echo json_encode(['mensaje' => 'Correo enviado con éxito']);
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Error al enviar el correo']);
}
?>