$(document).ready(function(){
  submitForm();
});


function submitForm() {
  $('form').on('submit', function(e){
    var thing = $('#item').val();
    $('ol').append( '<li>' + thing + '</li>' );
    e.preventDefault();
})}