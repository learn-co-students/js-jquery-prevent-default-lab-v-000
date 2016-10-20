$(document).ready(function(){
  submitForm();
});

// define functions here

function submitForm() {
  $('form').on('submit', function(event){
    var input = $('input').val();
    $("#list ol").append('<li>' + input + '</li>');
    event.preventDefault();
  });
}
