<?php


require "./connection.php";

if (isset($_POST["email"])) {

    $email = $_POST["email"];
    $clave = $_POST["clave"];

    $query = "SELECT SALDO, NOMBRE, FECHA, PAIS FROM datos WHERE CORREO = :email AND CLAVE = :clave";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':clave', $clave);
    $stmt->execute();

    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($resultado) {
        echo '<h2>Consulta de la cuenta con saldo</h2>' . '<br>';
        echo 'Nombre del investigador: ' . $resultado['NOMBRE'] . '<br>' . $resultado['FECHA'] . ' ' . $resultado['PAIS'] . '<br>'. ' ' . $resultado['SALDO'] . '<br>';
    } else {
        echo 'Nombre de usuario o contraseña no encontrados.';
    }
}
