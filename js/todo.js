$(document).ready(function(){
  // call functions here
});

// define functions here

function submitForm() {
  $('form').on('submit', function(event) {
    var item = $('#item').val();
    add(item);
    event.preventDefault();
  });
}

function add(item) {
  $('ol').append('<li>' + item + '</li>');
}