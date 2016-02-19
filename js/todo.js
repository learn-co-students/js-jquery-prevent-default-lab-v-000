$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm(){
	$('form').submit(function(event){
		event.preventDefault();
		$('#list ol').append( '<li>'+ $('#item').val() +'</li>' );
	});
}