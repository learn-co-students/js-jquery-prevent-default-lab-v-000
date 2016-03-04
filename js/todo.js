$(document).ready(function(){
  submitForm();
});

function submitForm(){
  $('form').on("submit", function(event){
    $('ol').append($("<li>").html($("#item").val()));
    event.preventDefault();
  });
}