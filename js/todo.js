$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm()
{
  $('form').on('submit', function(event)
{
  item = $('#item').val();
  console.log(item);
  $('#list ol').append('<li>'+ item + '</li>');
  event.preventDefault();
});
}
