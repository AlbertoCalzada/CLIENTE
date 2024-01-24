<?php
require 'connection.php';


$aleatorio = $_POST["aleatorio"];
$nif = $_POST["nif"];

$query = "UPDATE `base` SET `clave` = :aleatorio WHERE `base`.`nif` = :nif";
$stmt = $conn->prepare($query);
$stmt->bindParam(':aleatorio', $aleatorio, PDO::PARAM_STR);
$stmt->bindParam(':nif', $nif, PDO::PARAM_STR);

if ($stmt->execute()) {
    echo "Clave generada con éxito: $aleatorio";
} else {
    echo "Error al generar la clave.";
}


?>