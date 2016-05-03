$(document).ready(function(){
  submitForm();
});

function submitForm() {
$('form').on("submit", submiter );
}
function submiter(event){
  var formitem = $('#item').val();
  $('ol').append('<li>' + formitem + '</li>');
  $('#item').val()
  event.preventDefault();
}
