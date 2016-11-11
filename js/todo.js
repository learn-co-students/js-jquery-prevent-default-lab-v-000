$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  $('form').on('submit', function(event) {
    var listItem = $('#item').val();
    $('#list ol').append($('<li>').text(listItem));

    // $('ol').append( '<li>' + listItem + '</li>' );

    event.preventDefault();
  });
}