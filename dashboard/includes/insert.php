<?php

include ("connection.php");

//get data from front-end via POST
$title = $_POST['title'];
$question = $_POST['question'];
$expiration = $_POST['expirationDate'];
$answers = $_POST['answer'];

//Using mysql_real_escape_string to protect the code from SQL Injection.
$title = mysql_real_escape_string($title);
$question = mysql_real_escape_string($question);
$expiration = mysql_real_escape_string($expiration);


//insert questions
$sqlQuestion = ("INSERT INTO question (title, question, user_id, expiration_date) VALUES ('{$title}','{$question}',1,'{$expiration}');");
$insertQuestion = mysql_query($sqlQuestion);

//get the last id inserted into database
$idQuestion = mysql_insert_id();

//insert answers 
foreach ($answers as $answer ) {
	$sqlAnswer = ("INSERT INTO answer (question_id, answer) VALUES('{$idQuestion}', '{$answer}');");
	$insertAnswer = mysql_query($sqlAnswer);
}

//close connection
mysql_close($conn);

if(($insertQuestion)&&($insertAnswer)) {
	print 'true';
}else {
	print'false';
}
?>