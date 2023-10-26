<?php
// Process form data 
if($_SERVER["REQUEST_METHOD"] === "POST"){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Connect to the DB
    $conn = new mysqli("localhost", "u152438494_hillbenjamin", "Septiembre_13", "u152438494_PortfolioDB");

    if ($conn->connect_error) {
        die("Error de conexión a la base de datos: " . $conn->connect_error);
    }

    // Insert data into the table:"PortfolioFormMessages"
    $sql = "INSERT INTO PortfolioFormMessages (nombre, email, asunto, mensaje) VALUES ('$name', '$email', '$subject', '$message')";

    if ($conn->query($sql) === true) {
        // Send a mail to "info.hillbenjamin@gmail.com" with the data provided by the user
        $to = "info.hillbenjamin@gmail.com";
        $subject = "Nuevo formulario enviado";
        $message = "Nombre: $name\nEmail: $email\nAsunto: $subject\nMensaje: $message";

        mail($to, $subject, $message);
    } 

    $conn->close();
}
?>