$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(e){
    e.preventDefault();
    var li = $('#item').val();
    $('#item').val("");
    $('#list ol:first').append("<li>" + li + "</li>")

  })
}
