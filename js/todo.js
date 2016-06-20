$(document).ready(function() {
  submitForm()
  // call functions here
});

// define functions here

function submitForm(event) {
  $('form').on('submit', function(event){
    var item = $('#item').val()
    $('ol').append('<li>' + item + '</li>');
  event.preventDefault();
});
};
