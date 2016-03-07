// You'll be coding your solution in index.html and js/script.js. You'll want to make sure that index.html has a form with a text input field, and an ordered list that the to-do list item to the list.

// You'll want to bind a submit event to the form. The event should add the user's input to the list. You'll want to make sure the page doesn't refresh so that you can add multiple items to the list.

// There are tests, so make sure your work passes the tests!


$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function  submitForm(){
  $('form').on('submit', function(e){
    var listItem = $('#item').val();
    $('ol').append('<li>'+listItem+'</li>');
    e.preventDefault();
  })
}