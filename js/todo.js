$(document).ready(function(){
  // call functions here
  $("form").on( "submit", submitForm);
});

// define functions here

  function submitForm(event) {
    var item = ($("#item").val());
    $("ol").append(`<li>${item}</li>`);
    event.preventDefault();
  }

