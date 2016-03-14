$(document).ready(function(){
  submitForm();
});

function submitForm(){
  $('form').on('submit', function(event){
    var value = $('input#item').val();
    $('ol').append('<li>' + value + '</li>')
    $('input#item').val("")
    event.preventDefault();
  });
}