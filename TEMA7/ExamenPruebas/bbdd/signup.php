<?php

require_once __DIR__ . "/./connect.php";


if (isset($_POST['rEmail']) && isset($_POST['rPass'])) {


    $email = $_POST['rEmail'];
    $pass = $_POST['rPass'];
    $name = $_POST['rName'];
    $gender = $_POST['rGender'];
    $dateOfBirth = $_POST['rDatebirth'];

    // Verificar si el correo electrónico ya está registrado

    $stmt = $conn->prepare("SELECT correo FROM datos WHERE correo = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        echo "El correo electrónico ya está registrado.";
    } else {

        // Insertar el nuevo usuario en la base de datos
        $sql = "INSERT INTO datos (correo, contrasena, nomape, sexo, fecha) VALUES (:email, :pass, :name, :gender, :dateOfBirth)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':pass', $pass);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':gender', $gender);
        $stmt->bindParam(':dateOfBirth', $dateOfBirth);
        $stmt->execute();





        echo "Registro exitoso.";
    }
} else {
    echo "error";
}
