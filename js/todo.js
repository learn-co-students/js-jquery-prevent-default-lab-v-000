$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  // $('form').on('submit', adds);
  $('form').on('submit', function (event) {
    var item = $('#item').val();
    $('#list ol').append("<li>" + item + "</li>");
    event.preventDefault();
  });
}

// function adds(event) {
//   var item = $('#item').val();
//   $('#list ol').append("<li>" + item + "</li>");
//   event.preventDefault();
// }
