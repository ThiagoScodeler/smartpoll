$('#form-login').submit(function(){
  
  $.ajax({
    type: 'POST',
    url:  'includes/login.php',
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