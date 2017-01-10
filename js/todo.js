$(document).ready(function(){
  submitForm()
});

function submitForm() {
  $('form').on('submit', function(event) {
    var input = $('#item').val();

    $('ol').append(`<li> ${input} </li>`);

    event.preventDefault();
  });
}
