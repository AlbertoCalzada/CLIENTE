<?php
$dsn = 'mysql:host=localhost;dbname=dgt';
$username = 'root';
$password = '';

try {
    $db = new PDO($dsn, $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Error de conexión: ' . $e->getMessage());
}

if (isset($_POST['nif']) && isset($_POST['clave'])) {
    $nif = $_POST['nif'];
    $clave = $_POST['clave'];

    $query = "SELECT nombre, apellidos, puntos FROM base WHERE nif = '$nif' AND clave = '$clave'";
    $resultado = $db->query($query)->fetch(PDO::FETCH_ASSOC);

    if ($resultado) {
        echo 'Nombre: ' . $resultado['nombre'] . '<br>';
        echo 'Apellidos: ' . $resultado['apellidos'] . '<br>';
        echo 'Puntos disponibles: ' . $resultado['puntos'];
    } else {
        echo 'Usuario no encontrado o clave incorrecta';
    }
}

if (isset($_POST['nif2']) && isset($_POST['dateLicense'])) {
    $nif = $_POST['nif2'];
    $fecha = $_POST['dateLicense'];

    $query = "SELECT * FROM base WHERE nif = '$nif' AND fecha = '$fecha'";
    $resultado2 = $db->query($query)->fetch(PDO::FETCH_ASSOC);

    if ($resultado2) {
        $nuevaClave = rand(100000, 999999);
        $updateQuery = "UPDATE base SET clave = '$nuevaClave' WHERE nif = '$nif'";
        $db->exec($updateQuery);

        echo 'Tu nueva clave es ' . $nuevaClave;
    } else {
        echo 'No se encontraron datos para generar la nueva clave';
    }
}
?>

