$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', addListItem);
}

function addListItem(e) {
  var item = $('#item').val();
  $('#list ol').append('<li>' + item + '</li>');
}
