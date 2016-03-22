$(document).ready(function(){
  submitForm();
  // call functions here
});

function submitForm() {
	$('form').on('submit', function(event) {
		var item = $('input').val();
		$("ol").append("<li>" + item + "</li>");
		event.preventDefault();
	});
}