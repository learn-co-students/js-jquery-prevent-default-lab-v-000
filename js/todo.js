$(document).ready(function(){
  submitForm();
  // call functions here
});

// define functions here
function submitForm() {
$('form').on('submit', function(event){
 var data = $('#item').val();
 $('ol').append( '<li>' + data + '</li>' );
 event.preventDefault();
})}