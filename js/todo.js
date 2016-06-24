$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event) {
    $('#list ol').append("<li>" + $('#item').val() + "</li>");
    event.preventDefault();
  })
}
