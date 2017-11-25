$(document).ready(function(){
  submitForm();
  // call functions here
});

// define functions here

function submitForm(){
  $('form').on('submit', function(event){
    var item = $("#item").val();
    $("#added_item").text(item + " has been added.");
    event.preventDefault();
    debugger;
    $('ol').append('<li>' + item + '</li>');

  });
}
