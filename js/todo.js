$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm(){
  $('form').on('submit', function(event){
    var textInput = $('#item').val();
    $('ol').append('<li>'+ textInput+ '</li>');
    event.preventDefault();
  });
}
