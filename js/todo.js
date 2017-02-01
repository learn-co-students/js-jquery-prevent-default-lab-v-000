$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', handleSubmitForm);
};

function handleSubmitForm(e) {
  var listItem = $('#item').val();
  $('ol').append('<li>' + listItem + '</li>');
  e.preventDefault();
}
