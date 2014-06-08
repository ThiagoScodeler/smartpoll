<?php
session_start();

if((!isset ($_SESSION['login_session']) == true) and (!isset ($_SESSION['password_session']) == true)) {

	header ("Location: login.php");

	exit;
}
?>