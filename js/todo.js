$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm(){
  $('form').on('submit', function(event){
    var name = $('#item').val();
    $("#list ol").append('<li>' + name + "</li>");
    event.preventDefault();
  });
}
