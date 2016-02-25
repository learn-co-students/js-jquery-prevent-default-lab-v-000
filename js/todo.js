$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
// function submitForm() {
//   $(':submit').click(function(event) {
//     var addTo = $('#item').val();
//     $('#list').append('<li>' + addTo + '</li>');
//     event.preventDefault(); 
//   });
// }

// This ^^^^ works, but not passing the Learn tests

function submitForm() {
  $('form').on('submit', function(event){
    var item = $('#item').val();
  $('#list ol').append('<li>' + item + "</li>");
  event.preventDefault();
  })
}