<?php
require_once __DIR__ . "/./connect.php";

if (isset($_POST['fEmail']) && isset($_POST['fDatebirth'])) {
    
    $fEmail = $_POST['fEmail'];
    $fDatebirth = $_POST['fDatebirth'];

    // Verificar si el correo electrónico y la fecha de nacimiento coinciden
    $stmt = $conn->prepare("SELECT contrasena FROM datos WHERE correo = :email AND fecha = :datebirth");
    $stmt->bindParam(':email', $fEmail);
    $stmt->bindParam(':datebirth', $fDatebirth);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // Si hay una coincidencia, obtener la contraseña y mostrarla al usuario
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $password = $result['contrasena'];
        echo "Tu contraseña es: " . $password;
    } else {
        echo "No se encontró ninguna coincidencia para el correo electrónico y la fecha de nacimiento proporcionados.";
    }
} else {
    echo "Error: Datos del formulario no recibidos.";
}
?>
