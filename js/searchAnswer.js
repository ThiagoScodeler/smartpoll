$("#output").click(function(e) {

	$("#output").hide("slow");

	e.preventDefault();

	var idClicked = e.target.id;

	$.ajax({
		url: 'includes/getDataAnswer.php?id='+idClicked,
		data: '',
		dataType: 'json',
		success: function(data) {

			for (var i = 0; i < data.length; i++) {

				divP = document.createElement('p');
				$(divP).addClass('lead').appendTo($("#output_answer"));

				var input = $('<input>', {
					'type': 'button',
					id: data[i].id,
					"class": "btn btn-large btn-block btn-primary",
					value: data[i].answer

				});

				input.appendTo($(divP));

			};

			divPResult = document.createElement('p');
			$(divPResult).addClass('lead').appendTo($("#showResult"));

			var inputResult = $('<input>', {
				'type': 'button',
				id: idClicked,
				"class": "btn btn-large btn-block btn-success",
				'data-toggle': "modal",
				'data-target': "#myModal",
				value: "View Results"

			});

			inputResult.appendTo($(divPResult));

		} 
	});
});