$(".changePassword").click(function(e) {

	//show modal
	$('#myModal').modal('show')

});


$('#form-login').submit(function(){

	var newPassword = $("#newPassword").val();

	var confirmNewPassword = $("#confirmNewPassword").val();


	if (newPassword == confirmNewPassword){
	
	$.ajax({
    type: 'POST',
    url:  'includes/changePassword.php',
    data: $('#form-login').serialize(),
    success: function( data ) {

      if(data == 1){
        $('.message').removeClass('alert-danger');
      	$('.message').addClass("alert alert-success");
        $('.message').html('Success Change Password!');
        
      }else{

      	if(data == 0){

      	$('.message').addClass("alert alert-danger");
        $('.message').html('Actual Password is Incorrect!');

      	} else {

      	$('.message').addClass("alert alert-danger");
        $('.message').html('Fault in Change the Password!');

      	}

      };
    }
  });
	
	}else{
  
		$('.message').addClass('alert alert-danger');
		$('.message').html('Password and New Password are different!');

	}

  return false;
});
