$(document).ready(function(){

  submitForm();
});

function submitForm(){
  $('form').submit(function(event){
    var item = $('#item').val();
    $('ol').append( '<li>' + item + '</li>' );
    event.preventDefault();
  });
}
