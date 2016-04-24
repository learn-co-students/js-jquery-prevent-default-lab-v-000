$(document).ready(function(){
  submitForm();
});

// define functions here
function submitForm () {
  $("form").on("submit", function(e){
    e.preventDefault();

    var toDo = $("#item").val();
    $("#list ol").append("<li>" + toDo + "</li>");

    $("#item").val("");
  });
}