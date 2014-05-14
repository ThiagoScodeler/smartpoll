<?php
include ("connection.php");
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link href="bootstrap/css/bootstrap.css" rel="stylesheet">
	<link href="css/cover.css" rel="stylesheet">

</head>
<body>

	<?php

	$id = $_GET['id'];

	$sql_question  = mysql_query("SELECT q.id, q.title, q.question, q.user_id, q.date_question, q.expiration_date, ans.answer, u.name
		FROM question q JOIN answer ans ON ans.question_id = q.id JOIN user u ON u.id = q.user_id
		WHERE q.id = '$id' and q.expiration_date >=  CURRENT_TIMESTAMP");

	$sql_answer  = mysql_query("SELECT q.id, q.title, q.question, q.user_id, q.date_question, q.expiration_date, ans.answer, ans.id,
		u.name FROM question q JOIN answer ans ON ans.question_id = q.id JOIN user u ON u.id = q.user_id
		WHERE q.id = '$id' and q.expiration_date >=  CURRENT_TIMESTAMP");

	$data = mysql_fetch_array($sql_question);
	$title = $data['title'];
	$question = $data['question'];
	$user_name = $data['name'];
	$date_question = $data['date_question'];
	$date_expiration = $data['expiration_date'];

	?>


	<div class="site-wrapper">

		<div class="site-wrapper-inner">

			<div class="cover-container">

				<div class="inner cover">
					<h1 class="cover-heading"><?php echo $title ?></h1>
					<p class="lead"><?php echo $question ?></p>
					<p class="lead">Choose one option.</p>
				</div>

				<div id="hiden">
					<?php

					while($data_answer = mysql_fetch_array($sql_answer)){

						$answer = $data_answer['answer'];
						$answer_id = $data_answer['id'];

						?>

						<p class="lead">
							<input type="button" id="<?php echo $answer_id ?>" class="btn btn-large btn-block btn-info" value="<?php echo $answer ?>">
						</p>
						<?php } ?>
					</div>

					<div class="message"></div>

					<div id="show">
					<input type="button" name="" id="view" class="btn btn-large btn-block btn-success" value="View Results">
					</div>

					<div class="mastfoot">
						<div class="inner">
							
							<p>Creation Time: <?php echo $date_question ?>  |  Expires in: <?php echo $date_expiration ?> </p>
						</div>
					</div>
				</div>

			</div>

		</div>

<!--
	<h2 id="result">

	</h2> 

-->

<script src="bootstrap/js/jquery-2.1.1.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="js/insertVote.js" type="text/javascript"></script>

</body>
</html>