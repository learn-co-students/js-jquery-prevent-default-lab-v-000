$(document).ready(function(){
  // call functions here
});

// define functions here
function submitForm() {
  $('form').on('submit', function(e) {
    var listItem = $('#item').val();
    $('ol').append('<li>' + listItem + '</li>');
    e.preventDefault();
  });
}

