$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  $('form').submit(function(event) {
    $('ol').append('<li>' + $('#item').val() + '</li>');
    $('#item').val("");
    event.preventDefault();
  });
}


