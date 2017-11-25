$(document).ready(function(){
  submitForm();
});

function submitForm(){
  $('form').on("submit", function(e){
    e.preventDefault();
    var $input = $('#item').val();
    adds($input)
  })
}

function adds(input){
  $('ol').append('<li>'+ input + '</li>');
  $('#item').val('');
}
