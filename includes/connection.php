<?php

$host = 'localhost';
$username = 'root';
$password = '';

$db='smartpoll';

$conn = mysql_pconnect($host, $username, $password) or die (mysql_error());

mysql_select_db($db, $conn);

?>