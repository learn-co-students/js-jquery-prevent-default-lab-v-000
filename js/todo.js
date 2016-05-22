$(document).ready(function(){
  // call functions here
});

function submitForm(){

  $('form').on('submit', function(event){
    $("#list ol").append("<li>"+$("#item").val()+"</li>");
    event.preventDefault();
  });
}