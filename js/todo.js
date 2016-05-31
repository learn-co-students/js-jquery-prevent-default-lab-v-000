$(document).ready(function(){
  // call functions here
});


function submitForm(){
  $('form').on('submit', function(event){
  var myItem = $('input#item').val();
  $('ol').append("<li>" + myItem + "</li>"); 
  event.preventDefault();
  }
)}