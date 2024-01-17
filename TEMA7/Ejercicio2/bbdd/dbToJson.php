<?php

require_once __DIR__ . "./connection.php";

try {
    $query = "SELECT * FROM base";

    $json = $conn->query($query);

    foreach ($json as $row) {
       
        $rows[]=$row;
        
    }
    echo json_encode($rows);
    
} catch (PDOException $e) {
    echo $e;
}
