$("input").click(function(e) {

	e.preventDefault();

	var idClicked = e.target.id;
	//alert(idClicked);

	$("#hiden").hide("slow");
	$("#show").show(1000);

	$.ajax({
		url: 'insertVote.php?id='+idClicked,
		type: 'POST',
		data: $('.message').serialize(),
		success: function( data ) {
			if(data == 'true'){
				$('.message').html('<div class="alert alert-info">Thanks for your vote!</div>');
			}else{
				$('.message').html('<div class="alert alert-error">Fault to insert your vote!</div>');
			};
		}
	});
});

$(function(){
	$('#see').submit(function(){
		$.ajax({
			url: 'seeResult.php',
			type: 'POST',
			data: $('#see').serialize(),
			success: function( data ) {
				$('#result').html(data);
			}
		});
		return false;
	});
});

$(document).ready(function() {
	$("#view").click(function() {     
		$.post("seeResult.php",
			function(data){
				$("#result").html(data);
			}
			, "html");
	});
});