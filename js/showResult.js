$("#showResult").click(function(e) {

	$("#showResult").hide("slow");
	$(".message").hide("slow");

	e.preventDefault();

	var idClicked = e.target.id;

	$.ajax({
		url: 'includes/getDataResult.php?id='+idClicked,
		data: '',
		dataType: 'json',
		success: function(data) {

			for (var i = 0; i < data.length; i++) {

				divP = document.createElement('p');
				$(divP).addClass('lead').appendTo($(".modal-body"));

				var input = $('<input>', {
					'type': 'button',
					id: data[i].id,
					"class": "btn btn-large btn-block btn-primary",
					value: data[i].answer_id

				});

				input.appendTo($(".modal-body"));

			};

		} 
	});
});