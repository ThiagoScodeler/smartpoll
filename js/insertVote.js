$("input").click(function(e) {

	e.preventDefault();

	var idClicked = e.target.id;
	//alert(idClicked);

	if (idClicked == "view") {

	} else {

		$("#hiden").hide("slow");
		$("#showResult").show(1000);

		$.ajax({
			url: 'includes/insertVote.php?id='+idClicked,
			type: 'POST',
			data: $('.message').serialize(),
			success: function( data ) {
				if(data == 'true'){
					$('.message').addClass("alert alert-info");
					$('.message').html('Thanks for your vote!');
				}else{
					$('.message').addClass("alert alert-danger");
					$('.message').html('Fault to insert your vote!');
				};
			}
		});
	}
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