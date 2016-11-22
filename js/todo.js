$(document).ready(function(){
  submitForm()
});

function submitForm() {
  $('form').on('submit', function(event) {
    var newItem = $('#item').val();
    $('ol').append('<li>' + newItem + '</li>');
    event.preventDefault();
  });
}
