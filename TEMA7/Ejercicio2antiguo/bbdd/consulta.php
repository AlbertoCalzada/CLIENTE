<?php
require 'connection.php';

$nif = $_POST['nif'];
$clave = $_POST['clave'];

$query = "SELECT nombre, apellidos, puntos FROM base WHERE nif = :nif AND clave = :clave";
$stmt = $conn->prepare($query);
$stmt->bindParam(':nif', $nif);
$stmt->bindParam(':clave', $clave);
$stmt->execute();

$resultado = $stmt->fetch(PDO::FETCH_ASSOC);
//var_dump($resultado);
if ($resultado) {
  echo 'Nombre: ' . $resultado['nombre'] . '<br>';
  echo 'Apellidos: ' . $resultado['apellidos'] . '<br>';
  echo 'Puntos disponibles: ' . $resultado['puntos'];
} else {
  echo 'Usuario no encontrado o clave incorrecta';
}


?>