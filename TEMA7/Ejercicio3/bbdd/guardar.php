<?php
require "./connection.php";

if (isset(($_POST['datos']))) {

    function generarIdUsuario()
    {
        return str_pad(mt_rand(1, 9999999), 7, '0', STR_PAD_LEFT);
    }

    $datos = $_POST['datos'];

    $nombre = $datos['nombre'];
    $apellido1 = $datos['apellido1'];
    $apellido2 = $datos['apellido2'];
    $documentoIdentidad = $datos['documentoIdentidad'];
    $genero = $datos['genero'];
    $adscripcion = $datos['adscripcion'];
    $categoriaProfesional = $datos['categoriaProfesional'];
    $entidad = $datos['entidad'];
    $email = $datos['email'];

    //tabla personal

    $idUsuario = generarIdUsuario();


    $sqlPersonal = "INSERT INTO personal (id_usuario, nombre, apellido1, apellido2, nif, genero, email) 
                    VALUES (:idUsuario, :nombre, :apellido1, :apellido2, :documentoIdentidad, :genero, :email)";

    $stmtPersonal = $conn->prepare($sqlPersonal);

    // Asignar valores a los parámetros
    $stmtPersonal->bindParam(':idUsuario', $idUsuario);
    $stmtPersonal->bindParam(':nombre', $nombre);
    $stmtPersonal->bindParam(':apellido1', $apellido1);
    $stmtPersonal->bindParam(':apellido2', $apellido2);
    $stmtPersonal->bindParam(':documentoIdentidad', $documentoIdentidad);
    $stmtPersonal->bindParam(':genero', $genero);
    $stmtPersonal->bindParam(':email', $email);

    $stmtPersonal->execute();

    $resultado = $stmtPersonal->fetch(PDO::FETCH_ASSOC);





    // Insertar en la tabla 'academico'


    $sqlAcademico = "INSERT INTO academico (id_usuario, adscripcion, categoria, entidad) 
                    VALUES ('$idUsuario', '$adscripcion', '$categoriaProfesional', '$entidad')";

    $stmt2 = $conn->prepare($sqlAcademico);
    $stmt2->execute();

    $resultado2 = $stmt2->fetch(PDO::FETCH_ASSOC);


    if ($resultado2) {
        echo "Usuario guardado correctamente";
    } else {
        echo "Ha habido un error al guardar el usuario";
    }
}
