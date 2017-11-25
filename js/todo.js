$(document).ready(function(){
  submitForm();
});

function submitForm() {
$('form').on("submit", function(event){
  var li = $('#item').val();
  $('ol').append('<li>' + li + '</li>');
  $('#item').val("")
  event.preventDefault();
  });
}