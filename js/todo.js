$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function handleSubmitClick(e) {
  var item = $('#item').val();
  $('#list ol').append('<li>' + item + '</li>');
  e.preventDefault();
}

function submitForm() {
  $('form').on('submit', handleSubmitClick);
}
