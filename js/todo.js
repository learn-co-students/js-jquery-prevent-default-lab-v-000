$(document).ready(function(){
    submitForm();
});

// define functions here

function submitForm() {
  $('form').on('submit', function(event){
    var listitem = $("#item").val();
    $("ol".append("<li>" + listitem + "</li>");
    event.preventDefault();
  })
}
