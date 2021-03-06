<?php
     
     include ("includes/session.php");
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" href="images/favicon.ico" />
	<title>SmartPoll - Dashboard</title>

	<!-- Bootstrap -->
	<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<!-- Custom styles -->
	<link href="css/dashbord.css" rel="stylesheet">
	<link href="css/insert-poll.css" rel="stylesheet">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->

    </head>
    <body>

     <!-- Navbar header-->
     <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
       <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
         <span class="sr-only">Toggle navigation</span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
       </button>
       <span class="navbar-brand" >SmartPoll</span>
     </div>
     <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
       <li class="dropdown">
        <a id="dashboard-btn" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">Dashboard <b class="caret"></b></a>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dashboard-btn">
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="polls.php">Polls</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="insert-poll.php">Insert Poll</a>
          </li>
          <li role="presentation" class="divider"></li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="results.php">Results</a>
          </li>
        </ul>
      </li>
      <li><a href="#" class="changePassword">Change Password</a></li>
      <li><a href="files/user_guide.pdf">Help</a></li>
      <li><a href="includes/sessionExit.php" onclick="return confirm('Are you sure?')">Logout</a></li>
    </ul>
  </div>
</div>
</div>


<div class="container-fluid">
  <div class="row">

   <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
     <li><a href="index.php">Dashboard</a></li>
     <li><a href="polls.php">Polls</a></li>
     <li class="active"><a href="">Insert Poll</a></li>
     <li><a href="results.php">Results</a></li>
   </ul>
 </div>

 <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
  <h1 class="page-header">Insert poll</h1>
  
  <!-- Div to print result for insert -->
  <div class="result"></div>

  <form method="post" id="form" class="form-horizontal">

   <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" name="title" id="title" placeholder="Enter title" required="required">
  </div>

  <div class="form-group">
    <label for="expirationDate">Expiration Date</label>
    <input type="date" class="form-control" name="expirationDate"  placeholder="dd/mm/aaaa" required="required">
  </div>

  <div class="form-group">
    <label for="Question">Question</label>
    <input type="text" class="form-control" name="question" placeholder="Enter question" required="required">
  </div>

  <div class="form-group">

    <label for="answer">Answers</label>

    <div class="input-group input-answer">
     <input type="text" class="form-control" name="answer[]" placeholder="Enter the answer" required="required">
     <span class="input-group-btn">
      <button class="btn btn-default btn-remove" type="button"><span class="glyphicon glyphicon-remove"></span></button>

    </span>
  </div>

  <div class="input-group input-answer">
   <input type="text" class="form-control" name="answer[]" placeholder="Enter the answer"required="required">
   <span class="input-group-btn">
    <button class="btn btn-default btn-remove" type="button"><span class="glyphicon glyphicon-remove"></span></button>
  </span>

</div>

<div class="input-group add-answer">
 <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-plus"></span> Add</button>
</div>

</div>

<button type="submit" class="btn btn-primary">Save</button>
<button type="reset" class="btn btn-default">Cancel</button>

</form>
</div>
</div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

      </div>
      <div class="modal-body">

        <div class="login-panel panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Change Password</h3>
          </div>
          <div class="panel-body">
            <form id="form-login" role="form" method="post">
              <fieldset>
                <div class="form-group">
                  <input class="form-control" placeholder="Password" id="password" name="password" type="password" required="">
                </div>
                <div class="form-group">
                  <input class="form-control" placeholder="New Password" id="newPassword" name="newPassword" type="password" required="">
                </div>
                <div class="form-group">
                  <input class="form-control" placeholder="Confirm New Password" id="confirmNewPassword" name="confirmNewPassword" type="password" required="">
                </div>
                <div class="message">

                </div>
                <input type="submit" class="btn btn-lg btn-primary btn-block" value="Change" name="" placeholder="">
              </fieldset>

            </form>

          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="../bootstrap/js/jquery-2.1.1.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="../bootstrap/js/bootstrap.min.js"></script>
<!-- Custom Scripts -->
<script src="js/insert-poll.js" type="text/javascript"></script>
<script src="js/changePassword.js"></script>
</body>
</html>
