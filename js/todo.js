$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event) {
    var todoItem = $('#item').val();
    $('#list ol').append('<li>' + todoItem + '</li>');
    $('#item').val(''); // Clear input field once it has been added to the list
    event.preventDefault();
  });
}
