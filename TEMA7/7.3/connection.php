<?php
$host = "localhost";
$dbname = "unisevilla";
$username = "root";
$password = "";

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
} catch (PDOException $e) {
    die("Error de conexión a la base de datos: " . $e->getMessage());
}

// iniciar sesión
if (isset($_POST["nif"]) && isset($_POST["clave"])) {
    $nif = $_POST["nif"];
    $clave = $_POST["clave"];

    try {
        $query = "SELECT p.nombre, p.apellido1, p.apellido2, a.proyectos
                  FROM personal p
                  INNER JOIN academico a ON p.id_usuario = a.id_usuario
                  WHERE p.nif = '$nif' AND p.clave = '$clave'";

        $stmt = $db->prepare($query);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $fila = $stmt->fetch(PDO::FETCH_ASSOC);
            $respuesta = array(
                "nombre" => $fila["nombre"],
                "apellidos" => $fila["apellido1"] . " " . $fila["apellido2"],
                "grupos" => $fila["proyectos"]
            );

            echo json_encode($respuesta);
        } else {
            echo "Error al iniciar sesión. Verifica tus credenciales.";
        }
    } catch (PDOException $e) {
        echo "Error en la consulta: " . $e->getMessage();
    }
}

// registro
if (isset($_POST["nombre"]) && isset($_POST["apellido1"]) && isset($_POST["apellido2"]) && isset($_POST["fecha"])
    && isset($_POST["nif"]) && isset($_POST["nacionalidad"]) && isset($_POST["genero"]) && isset($_POST["adscripcion"])
    && isset($_POST["categoria"]) && isset($_POST["entidad"]) && isset($_POST["email"]) && isset($_POST["telefono"]) && isset($_POST["movil"])) {

    $nombre = $_POST["nombre"];
    $apellido1 = $_POST["apellido1"];
    $apellido2 = $_POST["apellido2"];
    $fecha = $_POST["fecha"];
    $nif = $_POST["nif"];
    $nacionalidad = $_POST["nacionalidad"];
    $genero = $_POST["genero"];
    $adscripcion = $_POST["adscripcion"];
    $categoria = $_POST["categoria"];
    $entidad = $_POST["entidad"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $movil = $_POST["movil"];

    $claveAleatoria = bin2hex(random_bytes(6)); 

    try {
        $queryPersonal = "INSERT INTO personal (nombre, apellido1, apellido2, fecha, nif, nacionalidad, genero, email, telefono, movil, clave) 
                          VALUES ('$nombre', '$apellido1', '$apellido2', '$fecha', '$nif', '$nacionalidad', '$genero', '$email', '$telefono', '$movil', '$claveAleatoria')";
        
        $db->exec($queryPersonal);

        $idUsuario = $db->lastInsertId();

        $queryAcademico = "INSERT INTO academico (adscripcion, categoria, entidad) 
                           VALUES ('$adscripcion', '$categoria', '$entidad')";
        
        $db->exec($queryAcademico);

        echo "Registro exitoso.";

    } catch (PDOException $e){
        echo "Error en la consulta: " . $e->getMessage();
    }
}

$db = null;
?>
