$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function adds(item) {
  $('#list ol').append('<li>' + item + '</li>')
}

function submitForm() {
  $('form').on('submit', function(event){
    var item = $('#item').val();
    adds(item);
    event.preventDefault();
  });
}
