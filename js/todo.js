$(document).ready(function(){

  submitForm();

  // call functions here
});

// define functions here
function submitForm() {
  $('form').on('submit', function(event) {
    var item = $('#item').val();
    $('#list ol').append('<li>' + item + '</li>');
    event.preventDefault();
  });
}