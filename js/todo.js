$(document).ready(function(){
  // call functions here
  submitForm();
});

function submitForm(){
$('form').on('submit', function(event){
  var item = $('#item').val();
  $("#list ol").append("<li>"+ item + "</li>");
  event.preventDefault();
});
}
// define functions here
