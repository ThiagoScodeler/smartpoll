<?php

include ("connection.php");

//get data from front-end via POST

//$idVote = $_POST['vote'];


//Using mysql_real_escape_string to protect the code from SQL Injection.
//$idVote = mysql_real_escape_string($idVote);


//select id question from answer
//$sqlQuestion = mysql_query("select * from answer where id = '$idVote'");

//$data = mysql_fetch_array($sqlQuestion);
//$idQuestion = $data['question_id'];

//insert vote
//$sqlInsertVote = mysql_query("insert into result (question_id, answer_id) VALUES ('{$idQuestion}','{$idVote}')");

//close connection
//mysql_close($conn);

$return = "thiago";

echo $return;


?>