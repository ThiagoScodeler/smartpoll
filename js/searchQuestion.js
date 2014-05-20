$(document).ready(function() {
	$.ajax({
		url: 'includes/getDataQuestion.php',
		data: '',
		dataType: 'json',
		success: function(data) {

			for (var i = 0; i < data.length; i++) {

				divP = document.createElement('p');
				$(divP).addClass('lead').appendTo($(".output"));

				var input = $('<input>', {
					'type': 'button',
					id: data[i].id,
					"class": "btn btn-large btn-block btn-danger",
					value: data[i].question

				});

				input.appendTo($(divP));
				
			};

		} 
	});
}); 
