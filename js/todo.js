$(document).ready(function(){
  // call functions here
  preventDef();
});

// define functions here
function submitForm() {
	$('form').on('submit', function(event){
		var item = $('#item').val();
		//debugger
		$('ol').append('<li>' + item + '</li>');
		event.preventDefault();
	});
}