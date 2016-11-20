$(document).ready(function(){
  // call functions here
 
submitForm();

});

function submitForm() {
 $('form').on('submit', function(e){   	// debugger
  	$("#list ol").append('<li>' + $('#item').val() + '</li>');
	// alert('hello'); 
	e.preventDefault();
});

} 
 

