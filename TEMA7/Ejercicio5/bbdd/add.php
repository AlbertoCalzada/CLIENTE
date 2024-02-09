<?php
require_once __DIR__ . "/./connect.php";

if (isset($_POST["balance"]))
    $balance = $_POST["balance"];
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
try {
    $sth = $conn->prepare('SELECT SALDO
    FROM datos
    WHERE CORREO = ? AND CLAVE = ?');
    $sth->execute([$email, $pass]);
    $new = $sth->fetchAll();
    $sth = $conn->prepare("UPDATE `datos` SET `SALDO` = ? WHERE CORREO = ? AND CLAVE = ?");
    $sth->execute([intval($new[0]["SALDO"]) + intval($balance), $email, $pass]);
    echo json_encode(intval($new[0]["SALDO"]) + intval($balance));
} catch (PDOException $e) {
    echo $e;
}
