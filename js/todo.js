$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var listItem = $('#item').val();
    $('ul').append( '<li>' + listItem + '</li>' );
  });
}