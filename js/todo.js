$(document).ready(function(){
  // call functions here
  submitForm(); 
});

// define functions here
//
function submitForm() {
  $('form').on("submit", handleFormSubmit); 
}

function handleFormSubmit(e) {
  var value = $('#item').val(); 
  var listItem = "<li>" + value + "</li>"
  $('#list ol').append(listItem); 
  e.preventDefault(); 
  return; 
}
