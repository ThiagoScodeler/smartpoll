$("#showResult").click(function(e) {

	$("#showResult").hide("slow");
	$(".message").hide("slow");

	e.preventDefault();

	var idClicked = e.target.id;

	$.ajax({
		url: 'includes/getDataResult.php',
		type: 'POST',
		data: 'id='+idClicked,
		dataType: 'json',
		success: function(data) {

			var total;

			for (var i = 0; i < data.length; i++) {
				total = total + parseInt(data[i].total);
			};

			progress = $('<div>',{
				'class' : 'progress progress-striped active'
			}).appendTo($('.modal-body'));


			for (var i = 0; i < answer.length; i++) {
				totalAnswer = parseInt(answer[i].total);
				var percent = ((totalAnswer/total)*100);
				alert(percent);

				divAnswer = $('<div>',{
					'class' : 'progress-bar',
					'role' : 'progressbar',
					'aria-valuenow' : percent,
					'aria-valuemax' :'100',
					'style' : 'width: '+percent+'%'
				}).appendTo(progress);

				spanAnswer = $('span',{
					'class' : 'sr-only',
					'text' : percent+'% Complete'
				}).appendTo(divAnswer);

			};

		} 
	});
});


