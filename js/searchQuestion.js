$(document).ready(function() {
	$.ajax({
		url: 'includes/getDataQuestion.php',
		data: '',
		dataType: 'json',
		success: function(data) {

			for (var i = 0; i < data.length; i++) {

				divP = document.createElement('p');
				$(divP).addClass('lead').appendTo($("#output"));

				var link = $('<a>', {
					class: "btn btn-large btn-block btn-danger",
					href: "vote.php?id="+data[i].id,
					text: data[i].question
				});

				link.appendTo($(divP));


			};

		} 
	});
}); 
