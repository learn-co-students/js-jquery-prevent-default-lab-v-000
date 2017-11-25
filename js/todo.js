$(document).ready(function(){
  submitForm();
});

function submitForm(){
	$('form').on('submit', function(event){
		event.preventDefault();
		$('ol').append("<li>"+ $("input[type='text']").val()+"</li>");
		$("input[type='text']").val("");
	});
}