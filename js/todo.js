$(document).ready(function() {
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  $('form').on('submit', function(event) {
    var newItem = $('#item').val();
    $('ol').append("<li>" + newItem + "</li>");
    event.preventDefault();
  });
}