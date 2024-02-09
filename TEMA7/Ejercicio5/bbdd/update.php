<?php
require_once __DIR__ . "/./connect.php";

if (isset($_POST["name"]))
    $name = $_POST["name"];
else
    return;
if (isset($_POST["email"]))
    $email = $_POST["email"];
else
    return;
if (isset($_POST["pass"]))
    $pass = $_POST["pass"];
else
    return;
if (isset($_POST["datebirth"]))
    $date = $_POST["datebirth"];
else
    return;
try {
    $sth = $conn->prepare("UPDATE `datos` SET `nomape` = ?, `fecha` = ? WHERE correo = ? AND contrasena = ?");
    $sth->execute([$name, $date, $email, $pass]);
} catch (PDOException $e) {
    echo $e;
}
