$(document).ready(function(){
  submitForm()
});

function submitForm(){
  $('form').on('submit', function(event) {
    var addToList = $('input').val();
    $('ol').append("<li>"+addToList+"</li>");
    event.preventDefault();
  });
}
