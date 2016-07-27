$(document).ready(function(){
  submitForm();
});

// define functions here
function submitForm() {
  $('form').on("submit", handleSubmitEvent)
}

function handleSubmitEvent(event) {
  var item = $("#item").val();
  $('ol').append('<li>' + item + "</li>");
  event.preventDefault();
}
