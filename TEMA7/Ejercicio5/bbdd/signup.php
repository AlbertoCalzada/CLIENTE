<?php
require_once __DIR__ . "/./connect.php";
if (isset($_POST["name"]))
    $name = $_POST["name"];
if (isset($_POST["email"]))
    $email = $_POST["email"];
if (isset($_POST["pass"]))
    $pass = $_POST["pass"];
if (isset($_POST["gender"]))
    $gender = $_POST["gender"];
if (isset($_POST["datebirth"]))
    $date = $_POST["datebirth"];

// correo 	contrasena 	nomape 	sexo 	fecha 	ccid
try {
    $query = "INSERT INTO `datos` (`correo`, `contrasena`, `nomape`, `sexo`, `fecha`, `ccid`)
        VALUES ('$email', '$pass', '$name', '$gender', '$date', 'NAN')";
    $conn->query($query);
    echo json_encode([
        "key" => $pass
    ]);
} catch (PDOException $e) {
    echo $e;
}
