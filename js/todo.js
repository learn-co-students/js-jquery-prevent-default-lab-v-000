$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function handleSubmitClick(event) {
  $('#list ol').append("<li>" + $('#item').val() + "</li>");
  event.preventDefault();
}

function submitForm() {
  $('form').on('submit', handleSubmitClick);

}
