$(document).on('click', '.showAnswers', function(e) {

	$(".output").hide("slow");

	e.preventDefault();

	var idClicked = e.target.id;

	$.cookie('idPollClicked', idClicked, {
		expires : 1
	});

	//Create button to show result
	divPResult = document.createElement('p');
	$(divPResult).addClass('lead').appendTo($(".showResult"));

	var inputResult = $('<input>', {
		'type': 'button',
		id: idClicked,
		"class": "btn btn-large btn-block btn-success btn-lg",
		'data-toggle': "modal",
		'data-target': "#myModal",
		value: "View Results"

	}).appendTo($(divPResult));


	if ( $.cookie(idClicked) == idClicked ){
		$('.message').addClass('alert alert-danger');
		$('.message').html('You already participated this poll!');

		//show button to view result
		$(".showResult").show(1000);

	}else{

		$.ajax({
			url: 'includes/getDataAnswer.php?id='+idClicked,
			data: '',
			dataType: 'json',
			success: function(data) {

				for (var i = 0; i < data.length; i++) {

					divP = document.createElement('p');
					$(divP).addClass('lead').appendTo($(".output_answer"));

					var input = $('<input>', {
						'type': 'button',
						id: data[i].id,
						"class": "btn btn-large btn-block btn-primary btn-lg",
						value: data[i].answer

					}).appendTo($(divP));
				};
			}
		});
	}
});

