$(document).ready(function(){
  submitForm();
});


function submitForm() {
  $('form').on('submit', function(event){
    var input = $('input').val();
    $("#list ol").append('<li>' + input + '</li>');
    event.preventDefault();
  });
}
