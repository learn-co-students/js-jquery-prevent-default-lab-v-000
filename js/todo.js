//Note: My commented out code below works, but just does not pass the specific Learn tests

$(document).ready(function(){
  //bind 'form' to 'submit' event and call function handleFormSubmit
  //$('form').on('submit', handleFormSubmit);
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(e){
    var item = $('#item').val();
    $('ol').append('<li>' + item + '</li>');
    e.preventDefault;
  });
}

// function adds() {
//   $('form').on('submit', function(e) {
//     var input = "<li>";
//     input += $("#item").val();
//     input += "</li>";
//     $('div#list ol').append(input);
//     e.preventDefault;
//   });
// };