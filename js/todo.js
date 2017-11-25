$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  $('form').on('submit', listIterate);
}

function listIterate(event){
   var item = $('#item').val();
   $("ol").append('<li>'+ item + '</li>');
   event.preventDefault();
 }
