$(document).ready(function(){
  // call functions here
});

function submitForm(){
  $("form").on('submit', function(event){
    var thing = $('#item').val();
    $('ol').append('<li>' + thing + '</li><br>');
    event.preventDefault();
  });
}