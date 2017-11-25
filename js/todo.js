$(document).ready(function(){
  // call functions here
  submitForm();

});

// define functions here
function submitForm(){

  $('form').on('submit',function(event){

    var toDo = $("#item").val();
    $('#list ol').append("<li>" +toDo + "</li>");
    event.preventDefault();
  });
}
