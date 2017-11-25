$(document).ready(function(){
  addItem()
});

function submitForm() {
  $('form').on('submit', function(event) {
    listItem = $('#item').val()
    $('ol').append('<li>' + listItem + '</li>');
    event.preventDefault();
  })
}