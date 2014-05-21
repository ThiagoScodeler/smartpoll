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

$sql  = "SELECT password FROM user where id = 1";
$result = mysql_query($sql); //execute query
$passwordDB = $result['password'];


if ($password == $passwordDB){
	if ($newPassword == $confirmNewPassword){
		if ($newPassword == $passwordDB){
			echo "erro1";
			//new password should be diferent than actual password//

		}else{
			$sqlchangePassword = pg_query("update usuario set senha = '$nova_senha' where id = $id");
			unset($_SESSION['senha_session']);
			$_SESSION['senha_session'] = $nova_senha;
			echo " <meta http-equiv=refresh content='0; URL=aluno_alterar_senha.php'>
			<script type=\"text/javascript\">
				alert (\"Senha Alterada com Sucesso!\");
			</script>";
		}
	}else {
		echo " <meta http-equiv=refresh content='0; URL=aluno_alterar_senha.php'>
		<script type=\"text/javascript\">
			alert (\"Campo Nova Senha diferente do campo Confirmar senha!\");
		</script>";
	}

}else{
	echo " <meta http-equiv=refresh content='0; URL=admin_alterar_senha.php'>
	<script type=\"text/javascript\">
		alert (\"Senha Atual Incorreta!\");
	</script>";
}
}


?>

