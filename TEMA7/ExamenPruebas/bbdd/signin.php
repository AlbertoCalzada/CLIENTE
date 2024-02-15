<?php

require_once __DIR__ . "/./connect.php";


if (isset($_POST['email']) && isset($_POST['pass'])) {
    
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    
    $sql = "SELECT * FROM datos WHERE correo=:email AND contrasena=:pass";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':pass', $pass);
    $stmt->execute();

    

    if ($stmt->rowCount() > 0) {
       
        echo "Inicio de sesión exitoso.";

        // Usuario autenticado correctamente, obtenemos sus datos
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        // Formateamos los datos del usuario como una cadena de texto separada por comas
        $userData = $usuario['nomape'] . "," . $usuario['sexo'] . "," . $usuario['fecha'] . "," . $usuario['ccid'];
        
        echo $userData; // Devolvemos los datos del usuario
    } else {
        // Las credenciales no son válidas
        echo "error";
    }
} else {
    echo "error";
}