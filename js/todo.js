$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
	$('form').on('submit', function(event) {
		event.preventDefault();
		var listInput = $('input#item').val();
		$('ol').append("<li>" + listInput + "</li>");
	});
}