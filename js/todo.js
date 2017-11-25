$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here


function submitForm(){
  $('form').submit(function(event){
    $('#list ol').append("<li>" + $('#item').val() + "</li>");
    event.preventDefault();
  });
}
