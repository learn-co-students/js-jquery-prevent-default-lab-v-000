$(document).ready(function(){

  submitForm();
});

function submitForm(){
  $('form').on('submit', function(event){
    var listItem = $('#item').val();
    $('#list ol').append( '<li>' + listItem + '</li>' );
    event.preventDefault();
  });
}
