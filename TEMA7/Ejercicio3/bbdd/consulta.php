<?php
require "./connection.php";

$nif = $_POST['nif'];
$clave = $_POST['pass'];

// Primera consulta para obtener id_usuario
$query1 = "SELECT id_usuario, nombre, apellido1, apellido2 FROM personal WHERE nif = :nif AND clave = :clave";
$stmt1 = $conn->prepare($query1);
$stmt1->bindParam(':nif', $nif);
$stmt1->bindParam(':clave', $clave);
$stmt1->execute();

$resultado1 = $stmt1->fetch(PDO::FETCH_ASSOC);


if ($resultado1) {

    // sacamos datos primera consulta
    $id_usuario = $resultado1['id_usuario'];


    $query2 = "SELECT proyectos FROM academico WHERE id_usuario = :id_usuario";
    $stmt2 = $conn->prepare($query2);
    $stmt2->bindParam(':id_usuario', $id_usuario);
    $stmt2->execute();

    $resultado2 = $stmt2->fetch(PDO::FETCH_ASSOC);

    if ($resultado2) {
        echo 'NIF:' . $nif . '<br>';
        echo "<br>";
        echo 'Nombre del investigador: ' . $resultado1['nombre'] . ' ' . $resultado1['apellido1'] . ' ' . $resultado1['apellido2'] . '<br>';
        echo "<br>";
        echo 'Proyectos: ' . $resultado2['proyectos'] . '<br>';
    } else {
        echo 'Este usuario no tiene ningun proyecto.';
    }
} else {
    echo 'Usuario no encontrado o clave incorrecta';
}
