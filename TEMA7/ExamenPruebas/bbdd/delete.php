<?php
require_once __DIR__ . "/./connect.php";

if (isset($_POST['uEmail'])) {
    $uEmail = $_POST['uEmail'];

    // Verificar si el correo electrónico existe en la base de datos
    $stmt = $conn->prepare("SELECT correo FROM datos WHERE correo = :email");
    $stmt->bindParam(':email', $uEmail);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // Borrar el usuario de la base de datos
        $stmt = $conn->prepare("DELETE FROM datos WHERE correo = :email");
        $stmt->bindParam(':email', $uEmail);
        $stmt->execute();

        echo "El usuario ha sido dado de baja correctamente.";
    } else {
        echo "El correo electrónico proporcionado no está registrado.";
    }
} else {
    echo "Error: Datos del formulario no recibidos.";
}
?>
