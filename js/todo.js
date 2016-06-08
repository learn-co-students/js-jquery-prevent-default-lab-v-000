$(document).ready(function(){
  // call functions here
});

// define functions here
function (){
  $(':submit').on('click', function(event){
    $('#list ol').append("<li>" +$('#item').val()+"</li>");
    event.preventDefault();
  });
}
