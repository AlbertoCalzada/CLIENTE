<?php
require_once __DIR__ . "/./connect.php";

if (isset($_POST['onif'])) {
    
    $onif = $_POST['onif'];
   

    // Verificar si el correo electrónico y la fecha de nacimiento coinciden
    $stmt = $conn->prepare("SELECT nif, codigoacceso FROM usuarioscj24 WHERE nif = :onif");
    $stmt->bindParam(':onif', $onif);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // Si hay una coincidencia, obtener la contraseña y mostrarla al usuario
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $password = $result['codigoacceso'];
        echo "Tu contraseña es: " . $password;
    } else {
        echo "No se encontró ninguna coincidencia ";
    }
} else {
    echo "Error: Datos del formulario no recibidos.";
}
?>
