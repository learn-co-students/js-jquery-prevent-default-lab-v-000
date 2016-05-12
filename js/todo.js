
$(document).ready(function(){
submitForm()
});

function submitForm() {
$('form').on('submit', function(event){
  var data = $('#item').val();
  $('ol').append( '<li>' + data + '</li>' );
  event.preventDefault();
})}

// define functions here
