$(document).ready(function(){
  // call functions here
  submitForm();
});

function submitForm(){
  $('form').on('submit', function(event){
    var ListItem = $('#item').val();
    $('ol').append( '<li>' + ListItem + '</li>' );
    event.preventDefault();
  });

}
