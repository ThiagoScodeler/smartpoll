<?php

//--------------------------------------------------------------------------
// 1) Connect to mysql database
//--------------------------------------------------------------------------
include ("connection.php");

//--------------------------------------------------------------------------
// 2) Query database for data
//--------------------------------------------------------------------------

$month = $_POST['month'];
//$month = 6;

$array = array();

$sql  = "SELECT * FROM question;";
  $result = mysql_query($sql); //execute query

  while ($row = mysql_fetch_array($result)) {     //fetch result   

    $array[] = array(
      'id' => (int)$row['id'],
      'title' => $row['title'],
      'question' => $row['question'],
      'date_question' => $row['date_question'],
      'expiration_date' => $row['expiration_date'],
      'data'=> array()
      );

  };

  //get last day from month

  $year = date("Y"); // Ano atual
  $endMonth = date("t", mktime(0,0,0,$month,'01',$year)); // Mágica, plim!


  for ($i=0; $i < count($array); $i++) { 
    $quetion= (int)$array[$i]['id'];
    $day=1;

    for ($day=1; $day <=$endMonth; $day++) { 

      $sql  = "SELECT COUNT(  question_id ) AS total FROM  result WHERE EXTRACT(MONTH FROM `date_vote`) = {$month} AND EXTRACT(DAY FROM `date_vote`) = {$day} AND question_id =  {$quetion} ;";
      $result = mysql_query($sql); //execute query

      while ($row = mysql_fetch_array($result)) {  
        array_push($array[$i]['data'], (int)$row['total']);
      }
    }
  }

  $array[] = array(
      'id' => null,
      'title' => 'Total',
      'question' => null,
      'date_question' => null,
      'expiration_date' => null,
      'data'=> array()
      );

  for ($day=1; $day <=$endMonth ; $day++) { 
     $sql  = "SELECT COUNT(  question_id ) AS total FROM  result WHERE EXTRACT(MONTH FROM `date_vote`) = {$month} AND EXTRACT(DAY FROM `date_vote`) = {$day};";
      $result = mysql_query($sql); //execute query

      while ($row = mysql_fetch_array($result)) {  
        array_push($array[$i]['data'], (int)$row['total']);
      }
  }






//--------------------------------------------------------------------------
// 3) echo result as json 
//--------------------------------------------------------------------------
echo json_encode($array);

?>