<?php

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
  include ("connection.php");

  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------
  $sql  = "SELECT * FROM question where expiration_date >= current_timestamp";
  $array = array();
  $result = mysql_query($sql); //execute query

  while ($row = mysql_fetch_array($result)) {     //fetch result   

    $array[] = array(
      'id' => $row['id'],
      'title' => $row['title'],
      'question' => $row['question'],
      'user' => $row['user_id'],
      'create' => $row['date_question'],
      'expiration' => $row['expiration_date'],
      );

  };


  //--------------------------------------------------------------------------
  // 3) echo result as json 
  //--------------------------------------------------------------------------
  echo json_encode($array);

  ?>