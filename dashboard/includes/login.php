<?php

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
include ("connection.php");

session_start();

  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------

$email = mysql_real_escape_string($_POST['email']);
$password = md5($_POST['password']);

$sql  = "SELECT * FROM user where email = '$email' and password = '$password'";

$result = mysql_query($sql); //execute query


if (mysql_num_rows($result) == 1 ) {

	print '1';
	$_SESSION['login_session'] = $email;
	$_SESSION['password_session'] = $password;

} else {

	print '0';
	unset($_SESSION['login_session']);
	unset($_SESSION['password_session']);
}
?>

