$(document).ready(function(){
  submitForm();
  // call functions here
});

// define functions here

function submitForm() {
  $('form').on('submit', function(event) {
    var listItem = $('#item').val();
    $('ol').append('<li>' + listItem + '</li>');
    event.preventDefault();
  });
}