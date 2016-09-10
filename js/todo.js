$(document).ready(function(){
  // call functions here
  click();
});

var input;
// define functions here


function submitForm() {
  $('input[type=submit]').on('submit', function(event) {
    input = $('input').val()
    $('ol').append("<li>" + input + "</li>");
    event.preventDefault();
  });
};
