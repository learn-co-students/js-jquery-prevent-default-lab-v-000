$(document).ready(function(){
  submitForm();
});

function submitForm() {  
  $('form').on('submit', function(event){    
    var item = $("#item").val();
    $("#list ol").append($("<li>").text(item));
    event.preventDefault();
  });
}