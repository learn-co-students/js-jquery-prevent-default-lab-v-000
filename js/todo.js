$(document).ready(function(){
  submitForm();
  // call functions here
});

// define functions here
function submitForm() {
  $('form').on('submit', function() {
    var todo = $('#item').val();
    $('#list ol').append('<li>'+todo+'</li>');
    event.preventDefault();
  });
}
