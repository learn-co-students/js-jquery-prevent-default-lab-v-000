$(document).ready(function(){
  submitForm();
});

// define functions here

function submitForm(e) {
  $('form').on('submit', function (e) {
    e.preventDefault();

    var text = $('#item').val();
    $('#list ol').append('<li>' + text + '</li>');
  });
}