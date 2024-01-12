<!DOCTYPE html>
<html>
<head>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
  padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = ($_GET['fname']);
	$r = ($_GET['lname']);


echo "<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>";
  echo "<tr>";
  echo "<td>" . $q . "</td>";
  echo "<td>" . $r . "</td>";
  echo "</tr>";

echo "</table>";

?>
</body>
</html>