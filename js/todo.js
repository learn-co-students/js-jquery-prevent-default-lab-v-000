$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var value = $('#item').val();
    $('#list ol').append(`<li>${value}</li>`);
  })
}
