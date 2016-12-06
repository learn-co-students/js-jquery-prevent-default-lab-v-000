$(document).ready(function(){

  submitForm();
});
// bind submit to form
function submitForm(){
  $('form').on('submit', function(event){
    var listItem = $('#item').val();
    $('ol').append( '<li>' + listItem + '</li>' );
    event.preventDefault();
  });
}
