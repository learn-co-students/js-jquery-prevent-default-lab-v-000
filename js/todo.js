$(document).ready(function(){
  submitForm();
});

function submitForm(){
	$('form').on('submit', function(event){
		var text = $("#item").val();
		$("ol").append("<li>" + text + "</li>");
		event.preventDefault();
	})
}