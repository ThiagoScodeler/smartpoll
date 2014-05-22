<?php

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
include ("connection.php");

  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------

$password = mysql_real_escape_string($_POST['password']);
$newPassword = mysql_real_escape_string($_POST['newPassword']);
$confirmNewPassword = mysql_real_escape_string($_POST['confirmNewPassword']);

$sql  = "SELECT * FROM user where id = 1";
$result = mysql_query($sql); //execute query
$resultPassword = mysql_fetch_array($result);
$passwordDB = $resultPassword['password'];
$idUser = $resultPassword['id'];


if ($password != $passwordDB){

	print '0'; //actual password incorrect//
}

else{

	$sqlUpdate = "update user set password = '$newPassword' where id = '$idUser'";
	$resultChange = mysql_query($sqlUpdate);

	if(($resultChange)) {
		print '1'; //password changed//
	}else {
		print'2'; //fault in change the password//
	}

}


?>



