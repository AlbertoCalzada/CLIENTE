<?php

require_once __DIR__ . "/./connect.php";


if (isset($_POST['rnif']) && isset($_POST['rpass'])) {


    $rnif = $_POST['rnif'];
    $rpass = $_POST['rpass'];
    $rname = $_POST['rname'];
    $ranno = $_POST['ranno'];
    

    // Verificar si el dni ya está registrado

    $stmt = $conn->prepare("SELECT nif FROM usuarioscj24 WHERE nif = :rnif");
    $stmt->bindParam(':rnif', $rnif);
    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        echo "El NIF ya está registrado.";
    } else {

        // Insertar el nuevo usuario en la base de datos
        $sql = "INSERT INTO usuarioscj24 (nif, codigoacceso, nombreapellidos, annonacimiento) VALUES (:rnif, :rpass, :rname, :ranno)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':rnif', $rnif);
        $stmt->bindParam(':rpass', $rpass);
        $stmt->bindParam(':rname', $rname);
        $stmt->bindParam(':ranno', $ranno);
        $stmt->execute();





        echo "Usuario creado con éxito";
    }
} else {
    echo "error";
}
