$(document).ready(function(){
  // call functions here
 	submitForm();
});

// define functions here

function submitForm() {
	$('form').on('submit', function(e){
		add();	
		e.preventDefault();
	});
}


function add() {
	$('#list ol').append("<li>" + $('input').val() + "</li>");

		
}
