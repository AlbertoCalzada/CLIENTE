<?php
require_once __DIR__ . "/./connect.php";

if (isset($_POST['uEmail'])) {
    $uEmail = $_POST['uEmail'];
    $uPass = $_POST['uPass'];
    $uName = $_POST['uName'];
    $uGender = $_POST['uGender'];
    $uDatebirth = $_POST['uDatebirth'];

    // Verificar si el correo electrónico existe en la base de datos
    $stmt = $conn->prepare("SELECT correo FROM datos WHERE correo = :email");
    $stmt->bindParam(':email', $uEmail);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // Actualizar los datos del usuario
        $sql = "UPDATE datos SET contrasena = :pass, nomape = :name, sexo = :gender, fecha = :dateOfBirth WHERE correo = :email";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':pass', $uPass);
        $stmt->bindParam(':name', $uName);
        $stmt->bindParam(':gender', $uGender);
        $stmt->bindParam(':dateOfBirth', $uDatebirth);
        $stmt->bindParam(':email', $uEmail);
        $stmt->execute();

        echo "Actualización exitosa.";
    } else {
        echo "El correo electrónico proporcionado no está registrado.";
    }
} else {
    echo "Error: Datos del formulario no recibidos.";
}
?>
