<?php

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
  include ("connection.php");

  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------

  $id = $_GET['id'];

  $sql  = "SELECT * FROM answer where question_id = {$id}";
  $array = array();
  $result = mysql_query($sql); //execute query

  while ($row = mysql_fetch_array($result)) {     //fetch result   

    $array[] = array(
      'id' => $row['id'],
      'question_id' => $row['question_id'],
      'answer' => $row['answer'],
      );

  };


  //--------------------------------------------------------------------------
  // 3) echo result as json 
  //--------------------------------------------------------------------------
  echo json_encode($array);

  ?>