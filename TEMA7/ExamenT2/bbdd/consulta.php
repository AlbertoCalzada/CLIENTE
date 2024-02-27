<?php

require_once __DIR__ . "/./connect.php";


if (isset($_POST['nif']) && isset($_POST['pass'])) {
    
    $nif = $_POST['nif'];
    $pass = $_POST['pass'];

    
    $sql = "SELECT * FROM usuarioscj24 WHERE nif=:nif AND codigoacceso=:pass";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nif', $nif);
    $stmt->bindParam(':pass', $pass);
    $stmt->execute();

    

    if ($stmt->rowCount() > 0) {
       
       

        // Usuario autenticado correctamente, obtenemos sus datos
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        // Formateamos los datos del usuario como una cadena de texto separada por comas
        $userData = $usuario['nombreapellidos'] . "," . $usuario['annonacimiento'];
        
        echo $userData; // Devolvemos los datos del usuario
    } else {
        // Las credenciales no son válidas
        echo "error";
    }
} else {
    echo "error";
}