<?php

//--------------------------------------------------------------------------
// 1) Connect to mysql database
//--------------------------------------------------------------------------
include ("connection.php");

//--------------------------------------------------------------------------
// 2) Query database for data
//--------------------------------------------------------------------------

$id = $_POST['id'];

$array = array();

  $sql  = "SELECT * FROM answer where question_id = {$id}";
  $result = mysql_query($sql); //execute query

  while ($row = mysql_fetch_array($result)) {     //fetch result   

    $array[] = array(
      'id' => $row['id'],
      'question_id' => $row['question_id'],
      'answer' => $row['answer'],
      'total' =>  0
      );

  };


  for ($i=0; $i < count($array); $i++) { 

    $sql  = "SELECT COUNT(  question_id ) AS total FROM  result WHERE  answer_id = {$array[$i]['id']}";

    $result = mysql_query($sql); //execute query

    $total = mysql_fetch_array($result);

    $array[$i]['total'] = $total['total'];

  };

//--------------------------------------------------------------------------
// 3) echo result as json 
//--------------------------------------------------------------------------
  echo json_encode($array);

  ?>