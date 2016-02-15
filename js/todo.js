$(document).ready(function(){
  submitForm();
});

function submitForm(){
  jQuery('form').on('submit', function(event){
    var task = jQuery('input#item').val();
    jQuery('ol').append('<li>' + task + '</li>');
    event.preventDefault();
  });
}