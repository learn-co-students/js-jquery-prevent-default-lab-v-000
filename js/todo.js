$(document).ready(function(){
  submitForm();
});

function submitForm(){
  $('form').on('submit', function(event) {
  var obj = $('#item').val();
  var message = "<li>" + obj + "</li>";
  $('#list ol').append(message);
  event.preventDefault();
});
};