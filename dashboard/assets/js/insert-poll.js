$(function(){
	$("#form").submit(function(){
		$.ajax({
			url:"includes/insert.php",
			type: 'POST',
			data: $("#form").serialize(),
			success: function( data ) {
				if(data == 'true'){
					$('.result').html('<div class="alert alert-success">Poll inserted successfully!</div>');
				}else{
					$('.result').html('<div class="alert alert-danger">Fault to insert poll!</div>');
				};
			}
		});
		$("#form :input").each( function() {
			$(this).val('');
		});
		return false;
	});
});


$(function () {
	function removeAnswer() {
		$(".btn-remove").click( function () {
			if($("div.input-answer").length > 2){
				$(this).parent().parent().remove();
			}
		});
	}


	$(".add-answer").click(function () {
		if($("div.input-answer").length < 6){
			newAnswer = $("div.input-answer:first").clone();
			newAnswer.find("input").val("");
			newAnswer.insertAfter("div.input-answer:last");
			removeAnswer();
		}
	});
});


