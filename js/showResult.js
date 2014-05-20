$(".showResult").click(function(e) {

	//clear modal area
	$('.modal-body').html('');

	$(".message").hide("slow");

	e.preventDefault();

	var idClicked = e.target.id;

	$.ajax({
		url: 'includes/getDataResult.php',
		type: 'POST',
		data: 'id='+idClicked,
		dataType: 'json',
		success: function(data) {

			var total=0;
			
			for (var i = 0; i < data.length; i++) {
				total = total + parseInt(data[i].total);
			};
			
			for (var i = 0; i < data.length; i++) {
				divProgressAnswer = ($('<div>',{
					'text': '<span class="text-result">'+data[i].answer+'</div>'
				}).appendTo('.modal-body'));



			progress = $('<div>',{
					'class' : 'progress progress-striped active'
				}).appendTo(divProgressAnswer);

				

				totalAnswer = parseInt(data[i].total);
				var percent = ((totalAnswer/total)*100);
				progress.append(
					$('<div>',{
						'class' : 'progress-bar',
						'role' : 'progressbar',
						'aria-valuenow' : percent,
						'aria-valuemin' : '0',
						'aria-valuemax' :'100',
						'style' : 'width: '+percent+'%',
						'text': Math.round(percent)+'%'
					}));
			};

		} 
	});
});


