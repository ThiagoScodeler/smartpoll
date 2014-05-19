$("#output_answer").click(function(e) {

	$("#output_answer").hide("slow");

	e.preventDefault();

	var idClicked = e.target.id;

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
	
});