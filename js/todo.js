$(document).ready(function(){
  submitForm();
});

function submitForm() {
    $('form').on("submit", function(event){
       var toDoItem = "<li>" + $('#item').val() + "</li>";
       $('#list ol').append(toDoItem);
       event.preventDefault();
    });
}