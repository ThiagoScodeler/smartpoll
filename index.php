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

	<div class="site-wrapper">

		<div class="site-wrapper-inner">

			<div class="cover-container">

				<div class="inner cover">
					<h1 class="cover-heading">SmartPoll</h1>
					<p class="lead">Select one Poll to participate.</p>
				</div>

				<?php

				$sql  = mysql_query("select * from question where expiration_date >= current_timestamp");

				while($data = mysql_fetch_array($sql)){

					$id = $data['id']; 
					$title = $data['title'];
					$question = $data['question'];

					?>
					
					<p class="lead">
						<a href="vote.php?id=<?php echo $id;?>" class="btn btn-large btn-block btn-danger"><?php echo $question ?></a>
					</p>

					<?php } ?>

			
					<div class="inner">
						<ul class="nav masthead-nav">
							<li><a href="login.html">Sign in</a></li>
						</ul>
					</div>
			
					<div class="mastfoot">
						<div class="inner">
							<p>© Copyright 2014 SmartPoll</p>
						</div>
					</div>
				</div>

			</div>

		</div>

		<script src="bootstrap/js/jquery-2.1.0.js" type="text/javascript"></script>
		<script src="js/searchQuestion.js" type="text/javascript"></script>

	</body>
	</html>