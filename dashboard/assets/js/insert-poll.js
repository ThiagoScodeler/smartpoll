$(function(){
	$("#form").submit(function(){
		$.ajax({
			url:"includes/insert.php",
			type: 'POST',
			data: $("#form").serialize(),
			success: function( data ) {
				if(data == 'true'){
					$('.result').addClass("alert alert-success");
					$('.result').html('Poll inserted successfully!<a class="close" data-dismiss="alert" href="#">&times;</a>');
				}else{
					$('.result').addClass("alert alert-danger");
					$('.result').html('Fault to insert poll!<a class="close" data-dismiss="alert" href="#">&times;</a>');
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


