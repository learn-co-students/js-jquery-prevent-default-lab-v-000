$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(e){
    var note = $('#item').val();
    $('#list ol').append('<li>' + note + '</li>');
    e.preventDefault();
  });
};
