$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm(){
  $('form').submit(function(e){
    var listItem = $('#item').val();
    $('ol').append('<li>' + listItem + '</li>');
    e.preventDefault();
  });
}
