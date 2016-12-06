$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm(){
  $('form').on('submit', function(event){
    var i = $('#item').val();
    alert (i)
    $("ol").append("<li>" + i + "</il>");
    event.preventDefault();
        });

};
