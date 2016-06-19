$(document).ready(function(){
  // call functions here
});

// define functions here

function submitForm() {
  $('form').on("submit", function(event) {
    var input = $('#item').val();
    $('ol').append('<li>' + input + '</li>');
    event.preventDefault();
  });

}
