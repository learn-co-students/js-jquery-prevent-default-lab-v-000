$(document).ready(function(){
  submitForm();
});

// define functions here
function submitForm(){
	$('form').on('submit', function(event){
	  var item = $('#item').val();
	  //alert(item);
	  $("ol").append("<li>"+item+"</li>");
	  event.preventDefault();
	});
}