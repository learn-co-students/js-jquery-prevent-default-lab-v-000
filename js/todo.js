// define functions here
function submitForm() {
  $("form").on("submit", function(e) {
    var index = 0;

    var item = $("#item").val();
    $("#list ol").append("<li class='item_" + index + "'>" + item + "</li>");
    e.preventDefault();
  })
}

$(document).ready(function(){
  submitForm();
});
