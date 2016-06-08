$(document).ready(function(){
  // call functions here
  asd()
});

// define functions here
//class .
//id    #
function asd(){
  $(':submit').on('click', function(event){
    $('#list ol').append("<li>" + $('#item').val() + "</li>")
    event.preventDefault();
  });
}
