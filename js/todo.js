$(document).ready(function(){
  submitForm()
});

function submitForm() {
  $('form').on('submit', function(e){
    e.preventDefault();
    var textField = $('#item').val();
    $('ol').append('<li>' + textField + '</li>')
  })
}
