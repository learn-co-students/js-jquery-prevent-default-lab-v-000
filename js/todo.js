$(document).ready(function(){
  addItem();
});

function addItem(){
  $("form").on("submit", function(event){
    var item = $("input#item").val();
    $("#list ol").append("<li>" + item + "</li>");
    event.preventDefault();
  })  
}