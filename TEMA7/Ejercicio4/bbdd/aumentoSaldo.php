<?php


require "./connection.php";

if (isset($_POST["saldo"])) {

    $cantidadAumentar = $_POST["saldo"];
    $email = $_POST["email"];

    $query = "SELECT SALDO FROM datos WHERE CORREO = :email";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($resultado) {
        $saldoAntiguo = $resultado['SALDO'];
        $nuevoSaldo = $saldoAntiguo + $cantidadAumentar;

        $query2="UPDATE `datos` SET `SALDO` = :nuevoSaldo WHERE `datos`.`CORREO` = ':email";

        $stmt2 = $conn->prepare($query2);
        $stmt2->execute();

        $resultado2 = $stmt2->fetch(PDO::FETCH_ASSOC);

        if($resultado2)
        {
            echo "Cantidad aumentada con éxito";
        }else{
            echo "Ha habido algun error al intentar aumentar el saldo, intentalo de nuevo.";
        }
    }
}
