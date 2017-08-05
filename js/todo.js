$(document).ready(function(){
  // call functions here

submitForm();

});

// define functions here


function preventRefresh() {
	$("#addItem").trigger("click", function(event){
		event.preventDefault()
	});
}

function submitForm() { 
$('form').on('submit', function(event){
  var item = $('#item').val();
  $("ol").append("<li>" + item + "</li>");
  event.preventDefault();
});

}
