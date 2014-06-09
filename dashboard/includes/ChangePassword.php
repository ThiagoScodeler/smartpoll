<?php

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
include ("connection.php");

session_start();


  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------

$password = md5($_POST['password']);
$newPassword = md5($_POST['newPassword']);
$confirmNewPassword = md5($_POST['confirmNewPassword']);


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
		 unset($_SESSION['password_session']);
         $_SESSION['password_session'] = $newPassword;
	}else {
		print'2'; //fault in change the password//
	}

}


?>



