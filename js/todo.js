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

// function handleFormSubmit(e) {
//   //set item equal to the value of the element with #item
//   var item = $('#item').val();
//   //append to the <ol> a new <li> with the item value
//   $("ol").append("<li>" + item + "</li>");
//   //stop browser refresh
//   e.preventDefault();
// }