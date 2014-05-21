$(document).on('click', '.btn-primary', function(e) {

	e.preventDefault();

	$(".output_answer").hide("slow");
	
	var idClicked = e.target.id;

	$.cookie(($.cookie('idPollClicked')), ($.cookie('idPollClicked')), {
		expires : 1
	});

	//show button to view result
	$(".showResult").show(1000);

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