$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
var submitForm = function(){
  $("form").on('submit', function(event){
    var todoItem = $("input").val();
    $("ol").append("<li>" + todoItem + "</li>");
    event.preventDefault();
  })
}
