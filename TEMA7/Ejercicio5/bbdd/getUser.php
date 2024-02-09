<?php
require_once __DIR__ . "./connect.php";

try {
    $query = "SELECT * FROM datos";
    $json = $conn->query($query);
    foreach ($json as $row) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} catch (PDOException $e) {
    echo $e;
}
