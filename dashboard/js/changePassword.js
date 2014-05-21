$(".changePassword").click(function(e) {

	//show modal
	$('#myModal').modal('show')

});


$('#form-login').submit(function(){
  
  $.ajax({
    type: 'POST',
    url:  'includes/changePassword.php',
    data: $('#form-login').serialize(),
    success: function( data ) {

      if(data == 1){
        window.location.href = 'dashboard/index.html';
      }else{
        $('.message').addClass("alert alert-danger");
        $('.message').html('Email or Password Incorrect!');
      };
    }
  });

  return false;
});
